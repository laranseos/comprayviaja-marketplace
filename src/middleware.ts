 import { NextResponse, NextRequest } from "next/server";
 import acceptLanguage from "accept-language";
 import { fallbackLng, languages } from "./app/i18n/settings";

// acceptLanguage.languages(languages);

 export const config = {
   matcher: ["/", "/home/:path*", "/hotel/:path*", "/tour/:path*", "/flight/:path*", "/cab/:path*", "/restaurant/:path*", "/pages/:path*"],
 };

 const cookieName = "i18next";

// export function middleware(req: NextRequest) {
  
//   let lng: any;
//   debugger;
//   if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
//   if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
//   if (!lng) lng = fallbackLng;

//   // Redirect if lng in path is not supported
//   if (!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith("/_next")) {
//     return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
//   }

//   if (req.headers.has("referer")) {
//     const refererUrl = new URL(req.headers.get("referer"));
//     const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
//     const response = NextResponse.next();
//     if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
//     return response;
//   }

//   return NextResponse.next();
// }
export function middleware(req: NextRequest) {
  let lng: any;
  debugger;
  
  if (req.cookies.has(cookieName)) {
    const cookieValue = req.cookies.get(cookieName)?.value;
    if (cookieValue) {
      lng = acceptLanguage.get(cookieValue);
    }
  }
  
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  }
  
  if (!lng) {
    lng = fallbackLng;
  }

  // Redirect if lng in path is not supported
  if (!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith("/_next")) {
    const redirectUrl = new URL(`/${lng}${req.nextUrl.pathname}`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer")!);
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
