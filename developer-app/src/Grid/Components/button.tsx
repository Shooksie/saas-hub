import React, { PropsWithChildren } from "react";
import { EditableComponent } from "./base";

type ButtonTypes =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "link"
  | "light"
  | "dark";

export const Button = ({
  type = "primary",
  children,
  label = "Add A label",
}: PropsWithChildren<{ type?: ButtonTypes; label?: string }>) => {
  return (
    <EditableComponent
      className={"d-flex justify-content-center align-items-center"}
    >
      <button type="button" className={`btn btn-${type}`}>
        {children || label}
      </button>
    </EditableComponent>
  );
};
