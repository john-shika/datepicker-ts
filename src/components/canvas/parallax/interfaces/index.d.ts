import { ReactJsxElementProps } from "@/components/interfaces";

export interface Density {
  width?: number;
  height?: number;
}

export interface NetworksProps extends ReactJsxElementProps {
  width?: number;
  height?: number;
  density?: Density;
}
