import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. Define las rutas públicas que NO quieres que vean los usuarios ya autenticados
const PUBLIC_PAGES = ["/login", "/register"];

const PRIVATE_PAGES = ["/tasks"];

export function middleware(req: NextRequest) {
  // Lee la cookie HTTP-Only llamada "token"
  const token = req.cookies.get("auth_token")?.value;

  // Comprueba si la ruta actual coincide con alguna pública
  const isPublic = PUBLIC_PAGES.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  const isPrivate = PRIVATE_PAGES.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  // 4. Si hay token y va a /login o /register, redirige a /tasks
  if (token && isPublic) {
    // Clona la URL y modifica el pathname
    const url = req.nextUrl.clone();
    url.pathname = "/tasks";
    return NextResponse.redirect(url);
  }

  if (!token && isPrivate) {
    // Clona la URL y modifica el pathname
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 5. En cualquier otro caso, deja pasar la petición
  return NextResponse.next();
}

// 6. Configuración: aplica solo a login y register
export const config = {
  matcher: ["/login/:path*", "/register/:path*", "/tasks"],
};
