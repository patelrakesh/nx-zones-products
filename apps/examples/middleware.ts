import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // console.log("Middleware Called.");
  // write your middleware logic here
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
  // write your specific paths in which you want to run this middleware
};
