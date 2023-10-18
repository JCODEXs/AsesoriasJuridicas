import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  async afterAuth(auth, req, evt) {
    console.log(req.nextUrl.query)
    if (req.nextUrl.pathname === '/admin' && !auth.userId) {
      return redirectToSignIn({ returnTo: "/admin" });
    }
   
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)'],
};