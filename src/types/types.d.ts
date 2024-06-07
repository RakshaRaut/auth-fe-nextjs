interface CookieOptions {
    expires?: number | Date | undefined;
    path?: string | undefined;
    domain?: string | undefined;
    secure?: boolean | undefined;
    sameSite?: 'strict' | 'lax' | 'none' | undefined;
}