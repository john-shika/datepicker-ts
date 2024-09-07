import * as React from "react";
import Content from "./components/Content";
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

export default function Container(): React.JSX.Element {
  return (
    <>
      <Content />
    </>
  );
}
