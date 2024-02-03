import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export function middleware(request:NextRequest){
    const path = request.nextUrl.pathname
    const token = request.cookies.get('token')?.value || '';
    const isPublicPath = path === '/login' || path === '/sign-up';
    if(isPublicPath && token.length > 0){
        if(path.includes('dashboard')){
            return NextResponse.redirect(new URL(path, request.nextUrl))
        }
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }

    if(!isPublicPath && !(token.length > 0)){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: ['/profile', '/sign-up', '/login', '/dashboard', '/dashboard/:path*']
}