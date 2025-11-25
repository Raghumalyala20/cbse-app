import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
    try {
        const { question, syllabusContext } = await request.json();
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ useFallback: true, error: 'No API key' }, { status: 200 });
        }
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const prompt = `You are a helpful CBSE tutor. Answer the user's question using only the provided syllabus context. If the answer is not found, say you don't have information.\n\nSyllabus Context:\n${syllabusContext}`;
        const result = await model.generateContent(prompt + '\n\nQuestion: ' + question);
        const answer = await result.response.text();
        return NextResponse.json({ answer, useFallback: false }, { status: 200 });
    } catch (err) {
        console.error('Chat API error:', err);
        return NextResponse.json({ useFallback: true, error: String(err) }, { status: 200 });
    }
}
