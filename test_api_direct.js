const https = require('https');

const apiKey = 'AIzaSyAIgkeKNh--CZqDv60xgKNY6gHywIHVRnw';
const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

const data = JSON.stringify({
    contents: [{
        parts: [{
            text: 'Hello, are you working?'
        }]
    }]
});

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log('Testing URL:', url.replace(apiKey, 'API_KEY'));
console.log('Making request...\n');

const req = https.request(url, options, (res) => {
    console.log('Status Code:', res.statusCode);
    console.log('Status Message:', res.statusMessage);

    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log('\nResponse:');
        try {
            const parsed = JSON.parse(responseData);
            console.log(JSON.stringify(parsed, null, 2));

            if (res.statusCode === 200) {
                console.log('\n✅ API is working!');
            } else {
                console.log('\n❌ API returned error');
            }
        } catch (e) {
            console.log(responseData);
        }
    });
});

req.on('error', (error) => {
    console.error('❌ Request failed:', error.message);
});

req.write(data);
req.end();
