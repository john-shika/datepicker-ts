import * as React from "react";
import VueMix from "../adapter/VueMix";
import type { TableVueProps } from "./interfaces";
import table from "./components/Table.vue";

export function TableVue(props: TableVueProps): React.JSX.Element {
  return (
    <>
      <VueMix 
        component={table}
      />
    </>
  );
}