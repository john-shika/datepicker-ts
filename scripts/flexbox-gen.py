#!python3


JUSTIFY_CONTENTS = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-evenly",
]

ALIGN_ITEMS = [
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "baseline",
]

ALIGN_CONTENTS = [
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "space-between",
  "space-evenly",
]


def flexbox_generate_names_v1():

  for justify_content in JUSTIFY_CONTENTS:
    items = justify_content.split("-")
    short_justify_content = items[len(items) - 1]

    for align_item in ALIGN_ITEMS:
      items = align_item.split("-")
      short_align_item = items[len(items) - 1]

      if short_justify_content == short_align_item:
        yield short_justify_content, (justify_content, align_item)
        continue
      
      yield f"{short_justify_content}-{short_align_item}", (justify_content, align_item)


def flexbox_generate_names_v2():
    
  for short_name, names in flexbox_generate_names_v1():
    justify_content, align_item = names
    
    for align_content in ALIGN_CONTENTS:
      items = align_content.split("-")
      short_align_content = items[len(items) - 1]

      if short_name == short_align_content:
        yield short_name, (justify_content, align_item, align_content)
        continue

      yield f"{short_name}-{short_align_content}", (justify_content, align_item, align_content)


def to_UpperCamelCase(name):
  items = name.split("-")
  temp = ""
  for item in items:
    firstChar = item[0].upper()
    lastWord = item[1:].lower()
    temp += firstChar + lastWord

  return temp


def make_quotes(val):
  return f"\"{val}\""


def template_enum_interfaces():
  temp = """
export enum Rules {"""
  
  for (name, data) in flexbox_generate_names_v1():
    temp += f"""
    {to_UpperCamelCase(name)} = \"{name}\","""
  
  temp += """
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
"""
  
  return temp
  

def template_rules_to_data():
  temp = """
export function flexbox__rules_to_data(rules: Rules): string[] {
    
  switch (rules) {"""
  
  for (name, data) in flexbox_generate_names_v1():
    temp += f"""
    case Rules.{to_UpperCamelCase(name)}:
      return [{", ".join(map(make_quotes, data))}]"""
  
  temp += """
    default:
      return ["flex-start", "stretch"];
  }
}
"""
  
  return temp

def template_name_to_rules():
  temp = """
export function flexbox__name_to_rules(name: string): Rules {
  name = name.toLowerCase();
  
  switch (name.toLowerCase()) {"""
  
  for (name, data) in flexbox_generate_names_v1():
    temp += f"""
    case {make_quotes(name)}:
      return Rules.{to_UpperCamelCase(name)}"""
  
  temp += """
    default:
      return Rules.StartStretch;
  }
}
"""
  
  return temp


def main():
  temp = """
import * as React from "react";
import { Box } from "@mui/material";

"use client";
"""

  temp += template_enum_interfaces()
  temp += template_name_to_rules()
  temp += template_rules_to_data()
  
  temp += """
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

export default function FlexBox({
  children,
  className,
  direction,
  content,
  gap,
  grow,
  rules,
}: FlexBoxProps): React.JSX.Element {
  content = content ?? "";
  direction = direction ?? "row";
  gap = gap ?? 0;
  grow = grow ?? 1;
  rules = rules ?? Rules.StartStretch;
  if (typeof rules === "string") rules = name_to_rules(rules);
  const [justifyContent, alignItems] = rules_to_data(rules as Rules);
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
"""

  print(temp)


if str(__name__).upper() in ("__MAIN__",):
  main()
