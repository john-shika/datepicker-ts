import * as React from "react";
import * as TimeX from "./datetime";
import Show from "./components/Show";

if (typeof window === "object") {
  Object.defineProperty(window, "TimeX", {
    get: () => TimeX,
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
