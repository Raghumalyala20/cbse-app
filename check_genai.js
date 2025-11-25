const genai = require('@google/genai');
console.log('Exports:', Object.keys(genai));
try {
    console.log('GoogleGenerativeAI:', genai.GoogleGenerativeAI);
} catch (e) {
    console.log('GoogleGenerativeAI not found');
}
try {
    console.log('GoogleGenAI:', genai.GoogleGenAI);
} catch (e) {
    console.log('GoogleGenAI not found');
}
