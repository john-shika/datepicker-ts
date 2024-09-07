import * as React from "react";
import type { TableVueProps } from "./interfaces";
import table from "./components/Table.vue";
import { VueMix } from "../adapter";

export function TableVue(props: TableVueProps): React.JSX.Element {
  return (
    <>
      <VueMix component={table} />
    </>
  );
}
