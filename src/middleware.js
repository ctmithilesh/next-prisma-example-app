const { NextResponse } = require("next/server");


export function middleware(request) {


    if (request.nextUrl.pathname.startsWith('/')) {
        return NextResponse.rewrite(new URL('/dashboard', request.url))
    }
}

export const config = {
    matcher: [
        '/'
    ]
}