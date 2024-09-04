import * as React from "react";
import { Box } from "@mui/material";

("use client");

export enum Rules {
  Start = "start",
  StartEnd = "start-end",
  StartCenter = "start-center",
  StartStretch = "start-stretch",
  StartBaseline = "start-baseline",
  EndStart = "end-start",
  End = "end",
  EndCenter = "end-center",
  EndStretch = "end-stretch",
  EndBaseline = "end-baseline",
  CenterStart = "center-start",
  CenterEnd = "center-end",
  Center = "center",
  CenterStretch = "center-stretch",
  CenterBaseline = "center-baseline",
  BetweenStart = "between-start",
  BetweenEnd = "between-end",
  BetweenCenter = "between-center",
  BetweenStretch = "between-stretch",
  BetweenBaseline = "between-baseline",
  EvenlyStart = "evenly-start",
  EvenlyEnd = "evenly-end",
  EvenlyCenter = "evenly-center",
  EvenlyStretch = "evenly-stretch",
  EvenlyBaseline = "evenly-baseline",
}

export interface FlexBoxProps {
  children?: React.ReactNode;
  className?: string;
  content?: string;
  direction?: string;
  gap?: number;
  grow?: number;
  rules?: Rules | string;
}

export function FlexBox_nameToRules(name: string): Rules {
  name = name.toLowerCase();

  switch (name.toLowerCase()) {
    case "start":
      return Rules.Start;
    case "start-end":
      return Rules.StartEnd;
    case "start-center":
      return Rules.StartCenter;
    case "start-stretch":
      return Rules.StartStretch;
    case "start-baseline":
      return Rules.StartBaseline;
    case "end-start":
      return Rules.EndStart;
    case "end":
      return Rules.End;
    case "end-center":
      return Rules.EndCenter;
    case "end-stretch":
      return Rules.EndStretch;
    case "end-baseline":
      return Rules.EndBaseline;
    case "center-start":
      return Rules.CenterStart;
    case "center-end":
      return Rules.CenterEnd;
    case "center":
      return Rules.Center;
    case "center-stretch":
      return Rules.CenterStretch;
    case "center-baseline":
      return Rules.CenterBaseline;
    case "between-start":
      return Rules.BetweenStart;
    case "between-end":
      return Rules.BetweenEnd;
    case "between-center":
      return Rules.BetweenCenter;
    case "between-stretch":
      return Rules.BetweenStretch;
    case "between-baseline":
      return Rules.BetweenBaseline;
    case "evenly-start":
      return Rules.EvenlyStart;
    case "evenly-end":
      return Rules.EvenlyEnd;
    case "evenly-center":
      return Rules.EvenlyCenter;
    case "evenly-stretch":
      return Rules.EvenlyStretch;
    case "evenly-baseline":
      return Rules.EvenlyBaseline;
    default:
      return Rules.StartStretch;
  }
}

export function FlexBox_rulesToData(rules: Rules): string[] {
  switch (rules) {
    case Rules.Start:
      return ["flex-start", "flex-start"];
    case Rules.StartEnd:
      return ["flex-start", "flex-end"];
    case Rules.StartCenter:
      return ["flex-start", "center"];
    case Rules.StartStretch:
      return ["flex-start", "stretch"];
    case Rules.StartBaseline:
      return ["flex-start", "baseline"];
    case Rules.EndStart:
      return ["flex-end", "flex-start"];
    case Rules.End:
      return ["flex-end", "flex-end"];
    case Rules.EndCenter:
      return ["flex-end", "center"];
    case Rules.EndStretch:
      return ["flex-end", "stretch"];
    case Rules.EndBaseline:
      return ["flex-end", "baseline"];
    case Rules.CenterStart:
      return ["center", "flex-start"];
    case Rules.CenterEnd:
      return ["center", "flex-end"];
    case Rules.Center:
      return ["center", "center"];
    case Rules.CenterStretch:
      return ["center", "stretch"];
    case Rules.CenterBaseline:
      return ["center", "baseline"];
    case Rules.BetweenStart:
      return ["space-between", "flex-start"];
    case Rules.BetweenEnd:
      return ["space-between", "flex-end"];
    case Rules.BetweenCenter:
      return ["space-between", "center"];
    case Rules.BetweenStretch:
      return ["space-between", "stretch"];
    case Rules.BetweenBaseline:
      return ["space-between", "baseline"];
    case Rules.EvenlyStart:
      return ["space-evenly", "flex-start"];
    case Rules.EvenlyEnd:
      return ["space-evenly", "flex-end"];
    case Rules.EvenlyCenter:
      return ["space-evenly", "center"];
    case Rules.EvenlyStretch:
      return ["space-evenly", "stretch"];
    case Rules.EvenlyBaseline:
      return ["space-evenly", "baseline"];
    default:
      return ["flex-start", "stretch"];
  }
}

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

export default function FlexBox({ children, className, direction, content, gap, grow, rules }: FlexBoxProps): React.JSX.Element {
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
