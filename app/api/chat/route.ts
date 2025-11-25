import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { question, syllabusContext } = await req.json();

        // Get API key from environment variable
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({
                error: 'API key not configured',
                useFallback: true
            }, { status: 200 });
        }

        // Call Gemini API
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `You are a helpful tutor for CBSE Class 9 students. Answer the following question based on the syllabus context provided. Keep answers concise, clear, and educational.

Question: ${question}

Syllabus Context (use this to answer if relevant):
${syllabusContext}

If the question is not in the syllabus, provide a brief, helpful explanation anyway, but mention it's not part of Class 9 CBSE syllabus.`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500,
                    }
                })
            }
        );

        if (!response.ok) {
            // If quota exceeded or API error, signal to use fallback
            return NextResponse.json({
                error: 'API quota exceeded or error',
                useFallback: true
            }, { status: 200 });
        }

        const data = await response.json();
        const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from AI';

        return NextResponse.json({ answer, source: 'gemini' });

    } catch (error) {
        console.error('Gemini API error:', error);
        return NextResponse.json({
            error: 'API error',
            useFallback: true
        }, { status: 200 });
    }
}
