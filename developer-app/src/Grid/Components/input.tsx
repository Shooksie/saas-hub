import React from "react";
import { EditableComponent } from "./base";

export const Input = ({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (value: string) => void;
}) => {
  return (
    <EditableComponent
      className={"d-flex justify-content-center align-items-center"}
    >
      <input
        onMouseDown={(e) => e.stopPropagation()}
        onDragStart={(e) => e.stopPropagation()}
        className="form-control"
        type="text"
      />
    </EditableComponent>
  );
};
