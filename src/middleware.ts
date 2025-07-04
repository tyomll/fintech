import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_COOKIE_NAME } from "@/shared/lib/app";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname.includes("/auth")) {
    const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE_NAME);

    if (accessToken?.value) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (pathname.includes("/dashboard")) {
    const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE_NAME);
    if (!accessToken?.value) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
