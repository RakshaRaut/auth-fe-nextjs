
import Cookies from 'js-cookie';

export interface CookieOptions {
    expires?: number | Date | undefined;
    path?: string | undefined;
    domain?: string | undefined;
    secure?: boolean | undefined;
    sameSite?: 'strict' | 'lax' | 'none' | undefined;
}

export class CookieService {
    /**
     * Set a cookie
     * @param {string} name - Name of the cookie
     * @param {string} value - Value of the cookie
     * @param {CookieOptions} [options] - Options for the cookie
     */
    static set(name: string, value: string, options?: CookieOptions): void {
        Cookies.set(name, value, options);
    }

    /**
     * Get a cookie
     * @param {string} name - Name of the cookie
     * @returns {string | undefined} - Value of the cookie
     */
    static get(name: string): string | undefined {
        return Cookies.get(name);
    }

    /**
     * Remove a cookie
     * @param {string} name - Name of the cookie
     * @param {CookieOptions} [options] - Options for removing the cookie
     */
    static remove(name: string, options?: CookieOptions): void {
        Cookies.remove(name, options);
    }

    /**
     * Get all cookies
     * @returns {{ [key: string]: string }} - Object with all cookies
     */
    static getAll(): { [key: string]: string } {
        return Cookies.get();
    }
}
