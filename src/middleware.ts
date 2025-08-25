import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if work in progress mode is enabled
  if (process.env.IS_WORKING_IN_PROGRESS === "true") {
    // If we're already on the work-in-progress page, don't redirect
    if (request.nextUrl.pathname === "/work-in-progress") {
      return NextResponse.next();
    }

    // Redirect all requests to the work-in-progress page
    return NextResponse.redirect(new URL("/work-in-progress", request.url));
  }

  // If work in progress is not enabled, continue with normal flow
  return NextResponse.next();
}

export const config = {
  // Apply middleware to all routes except static files and API routes
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, icons, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
