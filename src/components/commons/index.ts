import BoxGridLayout from "./BoxGridLayout";
import FlexBoxLayout from "./FlexBoxLayout";
import { Rules } from "./interfaces";

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

export const BoxGrid = BoxGridLayout;
export const FlexBox = FlexBoxLayout;

export default {
  BoxGrid,
  FlexBox,
  FlexBox_nameToRules,
  FlexBox_rulesToData,
  Rules,
};