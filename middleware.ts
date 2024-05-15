import NextAuth from 'next-auth';
import {NextResponse} from 'next/server';
import {BASE_PATH, authOptions} from './auth.config';

const {auth} = NextAuth(authOptions);
export default auth((req) => {
  const reqUrl = new URL(req.url);
  if (!req.auth && reqUrl.pathname === '/dashboard') {
    return NextResponse.redirect(
      new URL(`${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`, req.url)
    );
  }
  console.log('ROUTE', req.nextUrl.pathname);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
