import type { ReactJsxElementProps } from "@/components/interfaces";
import type { Plugin as VuePlugin, Component as VueComponent } from "vue";
import type { VueMixContext } from "../contexts/VueMixContext";

export interface VuePluginPack<Options extends unknown[]> {
  plugin: VuePlugin<Options>;
  options?: Options;
}

export type VueMixPluginPack<Options extends unknwon[]> = VuePluginPack<Options> | VuePlugin<Options> | null;

export interface VueMixProps<Options extends unknown[]> extends ReactJsxElementProps {
  id?: string;
  context?: React.Context<VueMixContext>;
  component?: VueComponent;
  props?: Record<string, unknown>;
  plugins?: VueMixPluginPack<Options>[];
}

export function isVuePluginPack<Options extends unknown[]>(obj: any): obj is VuePluginPack<Options>;
export function isVuePlugin<Options extends unknown[]>(obj: any): obj is VuePlugin<Options>;
