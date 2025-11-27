require('dotenv').config({ path: '.env.local' });
const https = require('https');

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("❌ No API key found in environment variables");
    process.exit(1);
}

console.log(`🔑 Using API Key: ${apiKey.substring(0, 10)}...`);

const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models?key=${apiKey}`,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const fs = require('fs');

console.log('📡 Requesting model list...');

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Status Code:', res.statusCode);
        try {
            const parsed = JSON.parse(data);
            fs.writeFileSync('models_list.json', JSON.stringify(parsed, null, 2), 'utf8');
            console.log('✅ Saved model list to models_list.json');

            if (res.statusCode === 200) {
                console.log('✅ Available Models:');
                if (parsed.models) {
                    parsed.models.forEach(m => {
                        console.log(` - ${m.name}`);
                    });
                }
            }
        } catch (e) {
            console.log('Raw Response:', data);
            fs.writeFileSync('models_list_raw.txt', data, 'utf8');
        }
    });
});

req.on('error', (error) => {
    console.error('Request error:', error);
});

req.end();
