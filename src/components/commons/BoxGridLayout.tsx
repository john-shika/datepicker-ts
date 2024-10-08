import * as React from "react";
import { Box } from "@mui/material";
import type { BoxGridProps } from "./interfaces";

("use client");

/*
 * attributes = grid-auto-columns | grid-auto-flow | grid-auto-rows | grid-template-areas | grid-template-columns | grid-template-rows
 *
 * grid-auto-columns  =
 * grid-auto-flow  =
 * grid-auto-rows  =
 * grid-template-areas  =
 * grid-template-columns  =
 * grid-template-rows =
 *
 * <initial-value>
 * grid-template-rows = none
 * grid-template-columns = none
 * grid-template-areas = none
 * grid-auto-rows = auto
 * grid-auto-columns = auto
 * grid-auto-flow = row
 * grid-column-gap = 0
 * grid-row-gap = 0
 * column-gap = normal
 * row-gap = normal
 * </initial-value>
 * */

export default function BoxGridLayout({ children, className, gap, grid }: BoxGridProps): React.JSX.Element {
  // props handling
  gap = gap ?? 0;
  grid = grid ?? "none";

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gap: gap,
          grid: grid,
        }}
        className={className}
      >
        {children}
      </Box>
    </>
  );
}
