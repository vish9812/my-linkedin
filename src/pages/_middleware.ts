import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req: req as any,
      secret: process.env.JWT_SECRET!,
      secureCookie: process.env.NODE_ENV === "production",
    });

    if (!session) return NextResponse.redirect("/home");
  }
}
