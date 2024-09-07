import * as React from "react";
import Show from "./components/Show";
import * as DateTimeMod from "./datetime";

("use client");

// @inject to global namespace
if (typeof window === "object") {
  Object.defineProperty(window, "DateTimeMod", {
    get: () => DateTimeMod,
    configurable: true,
    enumerable: true,
    // writable: false,
  });
}

export default function DatePicker(): React.JSX.Element {
  return (
    <>
      <Show />
    </>
  );
}
