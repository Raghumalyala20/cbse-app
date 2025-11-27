const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function verify() {
    try {
        // Read .env.local
        const envPath = path.join(__dirname, '.env.local');
        if (!fs.existsSync(envPath)) {
            console.error('❌ .env.local not found');
            return;
        }

        const envContent = fs.readFileSync(envPath, 'utf8');
        const match = envContent.match(/GEMINI_API_KEY=(.+)/);

        if (!match || !match[1]) {
            console.error('❌ GEMINI_API_KEY not found in .env.local');
            return;
        }

        const apiKey = match[1].trim();
        console.log('Found API Key:', apiKey.substring(0, 5) + '...');

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        console.log('Testing API connection...');
        const result = await model.generateContent('Hello, are you working?');
        const response = await result.response;
        const text = response.text();

        console.log('✅ API Test Successful!');
        console.log('Response:', text);

    } catch (error) {
        console.error('❌ API Test Failed:');
        console.error('Error message:', error.message);
        console.error('Full error:', JSON.stringify(error, null, 2));
        if (error.message.includes('API_KEY_INVALID')) {
            console.error('The API key appears to be invalid.');
        } else if (error.message.includes('API key not valid')) {
            console.error('The API key is not valid. Please check:');
            console.error('1. Go to https://aistudio.google.com/app/apikey');
            console.error('2. Make sure the API key is enabled');
            console.error('3. Check if Generative Language API is enabled in your project');
        }
    }
}

verify();
