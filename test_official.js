require('dotenv').config({ path: '.env.local' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
    console.log('Testing with exact official example...\n');
    console.log('API Key:', process.env.GEMINI_API_KEY ? 'Found' : 'NOT FOUND');

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const result = await model.generateContent("Hello!");
        console.log('\n✅ SUCCESS!');
        console.log('Response:', result.response.text());
    } catch (error) {
        console.log('\n❌ FAILED');
        console.log('Error:', error.message);
    }
}

test();
