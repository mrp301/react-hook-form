import React, { forwardRef } from "react";
import { FormType } from "../App";

type Props = {
  name: keyof FormType;
  label: string;
} & JSX.IntrinsicElements["input"];

/* eslint-disable react/display-name */
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <>
        <label className="label">{label}</label>
        <input {...props} ref={ref} />
      </>
    );
  }
);
