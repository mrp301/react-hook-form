import React, { VFC } from "react";
import { RadioGroup } from "./RadioGroup";

export const SnsForm: VFC = () => {
  const snsNames = ["Twitter", "Line", "Instagram"];

  return (
    <li>
      <label className="label">SNS</label>
      <RadioGroup formName="sns" formValues={snsNames} />
    </li>
  );
};
