import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ROUTES } from "./lib/routes";

export function middleware(request: NextRequest) {
  const isWorkInProgress = process.env.IS_WORKING_IN_PROGRESS === "true";
  const isWorkInProgressPage = request.nextUrl.pathname === ROUTES.WORK_IN_PROGRESS;

  // If work in progress mode is enabled
  if (isWorkInProgress) {
    // If we're already on the work-in-progress page, don't redirect
    if (isWorkInProgressPage) {
      return NextResponse.next();
    }

    // Redirect all requests to the work-in-progress page
    return NextResponse.redirect(new URL(ROUTES.WORK_IN_PROGRESS, request.url));
  }

  // If work in progress mode is disabled and user is on work-in-progress page
  if (!isWorkInProgress && isWorkInProgressPage) {
    // Redirect to the root page
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
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
