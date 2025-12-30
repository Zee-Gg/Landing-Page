import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
       return NextResponse.json(
        { response: "I'm sorry, but I haven't been configured with an API key yet. Please add GROQ_API_KEY to your environment variables." },
        { status: 200 }
      );
    }

    const groq = new Groq({
      apiKey: apiKey,
    });

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant for TechVision, a next-gen software development agency. You help visitors understand our services (Web Dev, AI, Mobile Apps, Cloud, Security, Data Engineering) and encourage them to start a project or contact us. Keep answers concise and professional.'
        },
        {
          role: 'user',
          content: message,
        },
      ],
      model: 'llama-3.3-70b-versatile',
    });

    const responseMessage = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({ response: responseMessage });
  } catch (error: any) {
    console.error('Groq API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
