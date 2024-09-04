import express from "express";
import { createServer } from "vite";
import * as ReactDOMServer from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "./createEmotionCache";
import theme from "./theme";
import App from "./app";

"use server";

// BANG: bun ./src/server.tsx
// NOTE: This is experimental features and not working properly

const main = async () => {
  const app = express();

  // app.use(express.static(path.join(import.meta.dirname, "../build")));

  const viteDevServer = await createServer({
    server: { middlewareMode: true },
  });

  app.use(viteDevServer.middlewares);

  // not effectively available
  app.use("*", (req, res) => {
    const cache = createEmotionCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  
    const html = ReactDOMServer.renderToString(
      <>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </CacheProvider>
      </>
    );
  
    const emotionChunks = extractCriticalToChunks(html);
    const emotionCss = constructStyleTagsFromChunks(emotionChunks);
  
    res.send(`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DatePicker Demo Logic From Scratch</title>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/app.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <meta name="emotion-insertion-point" content="emotion-insertion-point" />
      ${emotionCss}
    </head>
    <body>
      <div id="root">${html}</div>
      <!-- <script type="module" src="/src/main.tsx"></script> -->
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>`);
  });

  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });  
};

if (typeof document === "undefined" && typeof window === "undefined") main();
