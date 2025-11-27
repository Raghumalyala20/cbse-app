const https = require('https');

const apiKey = 'AIzaSyCZCSecqQ9hIDqsFhftdFDXBLGFGsA2yW8';

const data = JSON.stringify({
    contents: [{
        parts: [{
            text: "Say hello!"
        }]
    }]
});

const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log('Testing Gemini API with v1 endpoint...\n');
console.log('URL:', `https://${options.hostname}${options.path.split('?')[0]}\n`);

const req = https.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log('Status Code:', res.statusCode);
        console.log('Response:', responseData);

        if (res.statusCode === 200) {
            console.log('\n✅ SUCCESS! API is working!');
            try {
                const parsed = JSON.parse(responseData);
                console.log('AI Response:', parsed.candidates[0].content.parts[0].text);
            } catch (e) {
                console.log('Could not parse response');
            }
        } else {
            console.log('\n❌ API Error');
        }
    });
});

req.on('error', (error) => {
    console.error('Request error:', error);
});

req.write(data);
req.end();
