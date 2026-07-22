import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthRoute = req.nextUrl.pathname.startsWith("/admin/login");
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin/dashboard");

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
    return NextResponse.next();
  }

  if (isAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
