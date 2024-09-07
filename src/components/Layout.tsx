import * as React from "react";
import { Box, Container } from "@mui/material";
import type { ReactJsxElementProps } from "./interfaces";

export default function Layout({ children }: ReactJsxElementProps) {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>{children}</Box>
      </Container>
    </>
  );
}
