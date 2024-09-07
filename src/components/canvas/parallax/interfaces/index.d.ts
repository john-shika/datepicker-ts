export interface Density {
  width?: number;
  height?: number;
}

export interface NetworksProps {
  className?: string;
  id?: string;
  width?: number;
  height?: number;
  density?: Density;
}

export function genUnsafeShortUniqueId(): string;
export function unsafeMergeAny(a: any, b: any): any;
