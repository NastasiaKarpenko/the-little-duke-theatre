import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.SECRET });

  if (!token) return NextResponse.redirect(new URL("/login", request.url));

  switch (token.role) {
    case 'admin':
      if (!request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      break;
    case 'registered':
      if (!request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
      break;
    case 'guest':
    default:
      if (!request.nextUrl.pathname.startsWith('/home')) {
        return NextResponse.redirect(new URL('/home', request.url));
      }
      break;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
};