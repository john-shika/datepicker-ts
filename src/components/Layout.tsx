import * as React from "react";
import { Box, Container } from "@mui/material";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Container 
        className="bg-gray-500"
        maxWidth="xl"
      >
        <Box
          sx={{
            my: 4,
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
}
