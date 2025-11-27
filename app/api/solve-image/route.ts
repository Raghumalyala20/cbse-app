import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
    try {
        const { image, prompt } = await request.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'Gemini API key is not configured' }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const systemPrompt = `You are an expert Math and Science tutor for CBSE Class 9 students.
        
        Your Task:
        1. Analyze the provided image.
        2. If it contains a math problem, solve it step-by-step showing all working.
        3. If it contains a science diagram, explain its parts and function clearly.
        4. If it contains text/questions, answer them accurately.
        5. If the image is unclear or not related to study, politely ask for a clear image.

        Format:
        - Use clear headings and bullet points.
        - Use bold text for final answers or key terms.
        - Keep the tone encouraging and educational.`;

        const result = await model.generateContent([
            systemPrompt + "\n\nUser Instruction: " + prompt,
            {
                inlineData: {
                    data: image,
                    mimeType: "image/jpeg",
                },
            },
        ]);

        const solution = await result.response.text();

        return NextResponse.json({ solution }, { status: 200 });

    } catch (err) {
        console.error('Image Solver API error:', err);
        return NextResponse.json({ error: 'Failed to process image. Please try again.' }, { status: 500 });
    }
}
