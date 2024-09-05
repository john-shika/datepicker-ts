const main = () => {};

const preload = (obj: { called: boolean }) => {
  if (typeof obj?.called === "boolean" && obj.called) return;
  console.log(`document.readyState = "${document.readyState}";`);

  if (document.readyState === "complete") {
    obj.called = true;

    if (typeof window?.requestIdleCallback === "function") {
      window.requestIdleCallback(main);
    } else {
      setTimeout(main, 1);
    }
  }
};

(() => {
  "use strict";

  let obj = {
    called: false,
  };

  if (typeof window !== "object" && typeof document !== "object") throw new Error("DOM content is not available!");

  window.addEventListener("load", () => {
    preload(obj);
  });

  document.addEventListener("readystatechange", () => {
    preload(obj);
  });

  document.addEventListener("DOMContentLoaded", () => {
    preload(obj);
  });
})();
