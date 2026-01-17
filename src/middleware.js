import { NextResponse } from 'next/server';

export function middleware(request) {
  const authCookie = request.cookies.get('auth_token');
  const { pathname } = request.nextUrl;

  // Protect /add-product route
  if (pathname.startsWith('/add-product')) {
    if (!authCookie) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('error', 'Please login to access this page');
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-product/:path*'],
};
