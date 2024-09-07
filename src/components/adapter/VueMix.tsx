import * as React from "react";
import type { VueMixProps } from "./interfaces";
import { genUnsafeShortUniqueId } from "@/utils";
import { createApp } from "vue";


export default function VueMix<Options extends unknown[]>({ className, children, style, id, component, props, plugins }: VueMixProps<Options>): React.JSX.Element {

  const uid = genUnsafeShortUniqueId();

  // props handling
  id = id ?? `vueMix-${uid}`;

  React.useEffect(() => {

    if (component) {
      const app = createApp(component, props);
      
      if (plugins) {
        for (let {plugin, options} of plugins) {
          app.use(plugin, ...options);
        }
      }

      app.mount(`#${id}`);

      return (() => {
        console.log("Refresh Vue app...");
        app.unmount();
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div id={id}></div>
    </>
  );
}