import {
  getCookie,
  deleteCookie,
  getCookies,
  setCookie,
} from "cookies-next/client";
import type { OptionsType, CookieValueTypes } from "cookies-next";

import { isJsonString } from "@/shared/lib/utils";

type ICookieOptions = OptionsType;

export default class CookieService {
  static get(key: string) {
    const value: CookieValueTypes = getCookie(key);
    if (value && typeof value === "string" && isJsonString(value)) {
      return JSON.parse(value);
    }
    return value;
  }

  static getIn(key: string, subKey: string) {
    const storeObj: CookieValueTypes = getCookie(key);
    if (!storeObj || !isJsonString(storeObj)) return null;
    const jsonValue =
      typeof storeObj === "string" ? JSON.parse(storeObj) : storeObj;
    if (!subKey) return jsonValue;
    return jsonValue[subKey];
  }

  static set(key: string, value: CookieValueTypes, options?: ICookieOptions) {
    return setCookie(key, JSON.stringify(value), {
      maxAge: 60 * 60 * 24 * 365,
      expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
      ...options,
    });
  }

  static remove(key: string) {
    return deleteCookie(key);
  }

  static getAll() {
    return getCookies();
  }
}
