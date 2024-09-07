import { ASCII_LOWER, ASCII_UPPER, DIGITS } from "./interfaces";

export function alphaRnd(): string {
  const chars = DIGITS + ASCII_UPPER + ASCII_LOWER;
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

export function genAlphaRnd(length: number): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += alphaRnd();
  }
  return result;
}

export function genUnsafeShortUniqueId(): string {
  // generate random unique identifier by timestamp
  const timestamp = Number(new Date());

  // convert timestamp to base64 string and remove special characters
  const b64 = btoa(timestamp.toString());

  // remove all padding characters
  const rng = b64.replace(/\+|\//g, "x").replace(/\=/g, "");

  // make short unique identifier
  const n = rng.length;
  return rng.substring(Math.max(n - 8, 0), n) + genAlphaRnd(6);
}

export function unsafeMergeAny(a: any, b: any): any {
  // if both types are objects, process recursively
  if (typeof a === "object" && typeof b === "object") {
    for (const key in a) {
      if (key in b) {
        // reflection of `b` object
        const val = b[key];
        const typ = typeof val;

        // if value types are same, merge them recursively
        if (typeof a[key] === typ) {
          a[key] = unsafeMergeAny(a[key], val);
        }
      }
    }

    return a;
  }

  // override
  return b;
}
