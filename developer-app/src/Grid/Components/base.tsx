import React, { PropsWithChildren } from "react";

export const EditableComponent = ({
  children,
  className,
}: PropsWithChildren<{ options?: any; className?: string }>) => {
  return <div className={`flex-wrapper ${className || ""}`}>{children}</div>;
};
