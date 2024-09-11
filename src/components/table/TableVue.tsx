import * as React from "react";
import type { TableVueProps } from "./interfaces";
import table from "./components/Table.vue";
import { VueMix } from "../adapter";
import type { VueMixContext } from "../adapter/contexts/interfaces";

export function TableVue(props: TableVueProps): React.JSX.Element {

  const $context = React.createContext<VueMixContext>({
    keepAlive: true,
  });

  return (
    <>
      <VueMix component={table} />
      <VueMix component={table} />
      <VueMix context={$context} component={table} />
      <VueMix context={$context} component={table} />
    </>
  );
}
