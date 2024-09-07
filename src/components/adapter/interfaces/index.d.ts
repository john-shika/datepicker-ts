import { ReactJsxElementProps } from "@/components/interfaces";
import { Plugin as VuePlugin, Component as VueComponent } from "vue";

export interface VuePluginPack<Options extends unknown[]> {
  options: Options;
  plugin: VuePlugin<Options>
}

export interface VueMixProps<Options extends unknown[]> extends ReactJsxElementProps {
  id?: string;
  component?: VueComponent;
  props?: Record<string, unknown>;
  plugins?: VuePluginPack[],
}
