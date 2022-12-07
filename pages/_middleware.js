import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
const secret = process.env.SECRET;

export default function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.app_cookie_login;
  const nextUrl = req.url.includes('/dashboard');


  if (nextUrl) {
    if (jwt === undefined) {
      console.log("no token")
      return NextResponse.redirect('/login');
    }
    try {
      verify(jwt, secret);
      console.log("success verify")
      return NextResponse.next()
    } catch (e) {
      console.log("false verify")
      return NextResponse.redirect('/login');
    }
  }


  return NextResponse.next();
}