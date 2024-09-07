export interface FlexBoxProps {
  children?: React.ReactNode;
  className?: string;
  content?: string;
  direction?: string;
  gap?: number;
  grow?: number;
  rules?: Rules | string;
}

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

export function FlexBox_nameToRules(name: string): Rules;
export function FlexBox_rulesToData(rules: Rules): string[];

interface BoxGridProps {
  children?: React.ReactNode;
  className?: string;
  gap?: number;
  grid?: string;
}
