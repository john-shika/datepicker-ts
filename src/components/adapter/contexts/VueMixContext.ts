import * as React from "react";
import type { VueMixContext } from "./interfaces";

export const defaultVueMixContext = React.createContext<VueMixContext>({ keepAlive: false });
