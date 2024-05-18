import NextAuth from 'next-auth';
import {NextResponse} from 'next/server';
import {authOptions} from './auth';
export {auth as middleware} from './auth';

const {auth} = NextAuth(authOptions);
export default auth((req) => {
  const reqUrl = new URL(req.url);
  console.log(reqUrl);
  if (!req.auth && reqUrl.pathname !== '/') {
    return NextResponse.redirect(
      new URL(`${'/api/auth'}/signin?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`, req.url)
    );
  }
  console.log('ROUTE', req.nextUrl.pathname);
});
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
