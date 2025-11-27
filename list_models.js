const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: '.env.local' });

async function listModels() {
    try {
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error('❌ No API key found in .env.local');
            return;
        }

        console.log('Listing available Gemini models...\n');

        const genAI = new GoogleGenerativeAI(apiKey);

        // Try to list models
        const models = await genAI.listModels();

        console.log('✅ Available models:');
        console.log('='.repeat(50));

        for await (const model of models) {
            console.log(`\nModel: ${model.name}`);
            console.log(`  Display Name: ${model.displayName}`);
            console.log(`  Description: ${model.description}`);
            console.log(`  Supported Methods: ${model.supportedGenerationMethods?.join(', ')}`);
            console.log(`  Input Token Limit: ${model.inputTokenLimit}`);
            console.log(`  Output Token Limit: ${model.outputTokenLimit}`);
        }

    } catch (error) {
        console.error('❌ Error listing models:', error.message);
        console.error('\nFull error:', error);
    }
}

listModels();
