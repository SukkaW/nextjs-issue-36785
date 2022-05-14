import { NextResponse } from 'next/server';

export const middleware = (req) => {
  // The cookie middleware will add the `set-cookie` header
  const resp = NextResponse.next();
  resp.cookies.set('Next.js', 'middleware!');
  resp.headers.append('Set-Cookie', 'abc');
  return resp;
};
