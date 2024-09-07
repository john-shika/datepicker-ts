import type { Plugin as VuePlugin } from "vue";
import type { VuePluginPack } from "./interfaces";
import VueMixAdapter from "./VueMixAdapter";

export function isVuePluginPack<Options extends unknown[]>(obj: any): obj is VuePluginPack<Options> {
  return obj && isVuePlugin(obj?.plugin) && ["object", "undefined"].includes(typeof obj?.options);
}

export function isVuePlugin<Options extends unknown[]>(obj: any): obj is VuePlugin<Options> {
  return obj && ["function", "object"].includes(typeof obj);
}

export const VueMix = VueMixAdapter;

export default {
  VueMix,
};
