import * as React from "react";

interface CanvasProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Canvas({ className, style }: CanvasProps): React.JSX.Element {
  // props handling

  return (
    <>
      <canvas className={className} style={style} />
    </>
  );
}
