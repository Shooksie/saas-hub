import React, { useState } from "react";
import { EditableComponent } from "./base";

export const Title = ({
  value = "Default title value",
  onChangeText,
}: {
  value?: string;
  onChangeText?: (value: string) => void;
}) => {
  const [innValue, setInnValue] = useState(value);

  return (
    <EditableComponent
      className={"d-flex justify-content-center align-items-center"}
    >
      <input
        onChange={(e) => setInnValue(e.target.value)}
        value={innValue}
        className="form-control"
        type="text"
        style={{
          height: "30px",
          fontSize: "30px",
          backgroundColor: "transparent",
          borderRadius: 0,
          borderWidth: 0,
        }}
      />
    </EditableComponent>
  );
};
