const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
    const apiKey = "AIzaSyBCqWtMsoiP3F31apJfU3c5VjNONcOBB7E";

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    console.log("Calling Gemini API...");
    const result = await model.generateContent("Hello from CBSE Project!");

    console.log("Response:", result.response.text());
}

test();
