import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  if (url.pathname === "/") {
    url.pathname = "/board/1";
    return NextResponse.redirect(url);
  }
}
