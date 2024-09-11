import type { App as VueApplication } from "vue";

export interface VueMixContext<HostElement = any> {
  $loaded?: boolean;
  app?: VueApplication<HostElement>;
  keepAlive?: boolean;
}
