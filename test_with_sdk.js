const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
    const apiKey = 'AIzaSyAIgkeKNh--CZqDv60xgKNY6gHywIHVRnw';

    console.log('Testing with @google/generative-ai package...\n');

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' }); // Try gemini-pro instead

        console.log('Sending test message...');
        const result = await model.generateContent('Say hello!');
        const response = await result.response;
        const text = response.text();

        console.log('\n✅ SUCCESS! API is working!');
        console.log('Response:', text);

    } catch (error) {
        console.error('\n❌ Failed with gemini-pro, trying gemini-1.5-flash...');

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

            const result = await model.generateContent('Say hello!');
            const response = await result.response;
            const text = response.text();

            console.log('\n✅ SUCCESS! API is working with gemini-1.5-flash!');
            console.log('Response:', text);

        } catch (error2) {
            console.error('\n❌ Both models failed');
            console.error('Error:', error2.message);
            console.error('\nThis means the API is still not fully activated.');
            console.error('Wait 2-3 minutes and try again, or check if you need to set up billing.');
        }
    }
}

test();
