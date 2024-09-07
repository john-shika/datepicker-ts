export function genUnsafeShortUniqueId(): string {
  // generate random unique identifier by timestamp
  const timestamp = Number(new Date());

  // convert timestamp to base64 string and remove special characters
  const b64 = btoa(timestamp.toString());
  const rng = b64.replace(/\+|\/|\=/g, "x");
  const n = rng.length;

  // make short unique identifier
  return rng.substring(Math.max(n - 8, 0), n);
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
