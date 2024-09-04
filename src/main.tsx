import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "./createEmotionCache.ts";
import theme from "./theme.ts";
import App from "./app.tsx";
import "./styles/index.css";

const main = () => {
  const cache = createEmotionCache();
  
  React.startTransition(() => {
    const fragment = document.createDocumentFragment();
    const ownerDocument = fragment.ownerDocument;
    const rootElement = ownerDocument.createElement("div");
    rootElement.setAttribute("id", "root");
    ownerDocument.body.appendChild(rootElement);
    document.body.appendChild(rootElement);
    ReactDOM.createRoot(rootElement).render(
      <>
        <React.StrictMode>
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </CacheProvider>
        </React.StrictMode>
      </>
    );
  });
};

const preload = (obj: { once: boolean }) => {
  if (typeof obj?.once === "boolean" && !obj.once) return;
  console.log(`document.readyState = "${document.readyState}";`);

  if (document.readyState === "complete") {
    obj.once = false;

    if (typeof window?.requestIdleCallback === "function") {
      window.requestIdleCallback(main);
    } else {
      setTimeout(main, 1);
    }
  }
};

let obj = {
  once: true,
};

window.addEventListener("load", () => {
  preload(obj);
});

document.addEventListener("readystatechange", () => {
  preload(obj);
});

document.addEventListener("DOMContentLoaded", () => {
  preload(obj);
});
