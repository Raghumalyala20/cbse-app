require('dotenv').config({ path: '.env.local' });
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

const logFile = 'debug_output.txt';
function log(message) {
    console.log(message);
    fs.appendFileSync(logFile, message + '\n');
}

async function debug() {
    fs.writeFileSync(logFile, ''); // Clear previous logs

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
        log("❌ No API key found in environment variables");
        return;
    }

    log(`🔑 Using API Key: ${apiKey.substring(0, 10)}...`);

    const genAI = new GoogleGenerativeAI(apiKey);

    try {
        log("📡 Attempting to use gemini-2.0-flash...");
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        log("✨ Generating content...");
        const result = await model.generateContent("Hello");
        log("✅ Response received: " + result.response.text());

    } catch (error) {
        log("❌ Error details:");
        log(JSON.stringify(error, null, 2));
        if (error.message) log("Error Message: " + error.message);

        // Try fallback model if 404
        if (error.message && error.message.includes("404")) {
            log("\n⚠️ 404 Error detected. Trying fallback model 'gemini-pro'...");
            try {
                const model2 = genAI.getGenerativeModel({ model: "gemini-pro" });
                const result2 = await model2.generateContent("Hello");
                log("✅ Fallback Response received: " + result2.response.text());
            } catch (error2) {
                log("❌ Fallback Error details:");
                log(JSON.stringify(error2, null, 2));
            }
        }
    }
}

debug();
