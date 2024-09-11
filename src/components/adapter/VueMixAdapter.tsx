import * as React from "react";
import type { Plugin as VuePlugin } from "vue";
import type { VueMixProps, VuePluginPack } from "./interfaces";
import { genUnsafeShortUniqueId } from "@/utils";
import { createApp } from "vue";
import { isVuePlugin, isVuePluginPack } from ".";
import type { VueMixContext } from "./contexts/interfaces";

export default function VueMixAdapter<Options extends unknown[]>({
  className,
  children,
  style,
  id,
  context,
  component,
  props,
  plugins,
}: VueMixProps<Options>): React.JSX.Element {
  const uid = genUnsafeShortUniqueId();

  // props handling
  id = id ?? `vueMix-${uid}`;

  const $context = context ?? React.createContext<VueMixContext>({ keepAlive: false });
  const ctx = React.useContext($context);

  React.useEffect(() => {
    if (ctx?.$loaded) return;
    if (!component) return;
    
    console.log("Create 'Adapter/VueMix/Vue' app...");
    const app = createApp(component, props);

    if (plugins) {
      for (let obj of plugins) {
        if (obj) {
          if (isVuePluginPack(obj)) {
            const vuePluginPack = obj as VuePluginPack<Options>;
            const options = vuePluginPack?.options ?? ([] as unknown[] as Options);
            app.use<Options>(vuePluginPack.plugin, ...options);
            continue;
          }
          if (isVuePlugin(obj)) {
            const vuePlugin = obj as VuePlugin<Options>;
            const options = [] as unknown[] as Options;
            app.use<Options>(vuePlugin, ...options);
            continue;
          }
          throw new Error("Couldn't identify Vue plugin!");
        }
      }
    }

    app.mount(`#${id}`);
    
    // store data
    ctx.app = app;
    ctx.$loaded = true;

    return () => {
      if (ctx?.keepAlive) return
      
      console.log("Destroy 'Adapter/VueMix/Vue' app...");
      
      // reset data
      ctx.app = undefined;
      ctx.$loaded = false;

      // unmount Vue app
      app.unmount();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div id={id} className={className} style={style}>
        {children}
      </div>
    </>
  );
}
