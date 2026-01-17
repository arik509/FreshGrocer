import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  // Mock Authentication
  if (email === 'user@freshgrocer.com' && password === 'grocery123') {
    const cookie = serialize('auth_token', 'mock_token_123', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Set-Cookie': cookie },
    });
  }

  return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
}
