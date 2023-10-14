import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  async afterAuth(auth, req, evt) {
    if (req.nextUrl.pathname === '/admin' && !auth.userId) {
      return redirectToSignIn({ returnTo: req.url });
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)'],
};