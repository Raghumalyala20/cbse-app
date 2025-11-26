import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
    try {
        const { question, syllabusContext, history } = await request.json();
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ useFallback: true, error: 'No API key' }, { status: 200 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        const systemPrompt = `You are an expert CBSE AI Tutor for Class 9 students.
        
        Your Goal: Help students understand concepts deeply, not just give answers.
        
        Guidelines:
        1. **Be Encouraging & Friendly**: Use emojis occasionally. Be patient.
        2. **Socratic Method**: If a student asks a broad question, ask a guiding question back to check their understanding before explaining.
        3. **Use the Syllabus**: The provided context is your primary textbook. Refer to it for definitions and key points.
        4. **Expand Knowledge**: You CAN use your general knowledge to provide analogies, real-world examples, or simpler explanations if the syllabus context is too technical.
        5. **Structure**: Use bullet points, bold text for keywords, and short paragraphs.
        
        Syllabus Context for this session:
        ${syllabusContext}`;

        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            systemInstruction: systemPrompt
        });

        const chat = model.startChat({
            history: history || [],
            generationConfig: {
                maxOutputTokens: 1000,
            },
        });

        const result = await chat.sendMessage(question);
        const answer = await result.response.text();

        return NextResponse.json({ answer, useFallback: false }, { status: 200 });
    } catch (err) {
        console.error('Chat API error:', err);
        return NextResponse.json({ useFallback: true, error: String(err) }, { status: 200 });
    }
}
