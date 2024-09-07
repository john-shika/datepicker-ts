import * as React from "react";
import { Box } from "@mui/material";
import type { FlexBoxProps } from "./interfaces";
import { Rules } from "./interfaces";
import { FlexBox_nameToRules, FlexBox_rulesToData } from ".";

("use client");

/*
 * justify-content = flex-start | flex-end | center | space-between | space-around | space-evenly
 * align-items = flex-start | flex-end | center | stretch | baseline
 * align-content = flex-start | flex-end | center | stretch | space-between | space-evenly
 * flex-direction = row | row-reverse | column | column-reverse
 * flex-wrap = nowrap | wrap | wrap-reverse
 * flex-flow = flex-direction & flex-wrap
 * gap = row-gap & column-gap
 * flex-grow = 0..100
 * */

export default function FlexBoxLayout({ children, className, direction, content, gap, grow, rules }: FlexBoxProps): React.JSX.Element {
  // props handling
  content = content ?? "";
  direction = direction ?? "row";
  gap = gap ?? 0;
  grow = grow ?? 1;
  rules = rules ?? Rules.StartStretch;

  if (typeof rules === "string") rules = FlexBox_nameToRules(rules);
  const [justifyContent, alignItems] = FlexBox_rulesToData(rules as Rules);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: justifyContent,
          alignItems: alignItems,
          alignContent: content,
          flexDirection: direction, // row | row-reverse | column | column-reverse
          flexWrap: "wrap", // nowrap | wrap | wrap-reverse
          flexGrow: grow, // 0-100
          gap: gap,
        }}
        className={className}
      >
        {children}
      </Box>
    </>
  );
}
