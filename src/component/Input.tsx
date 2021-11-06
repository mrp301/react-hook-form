import React, { forwardRef } from "react";

type Props = {
  type: "number" | "text";
  label: string;
} & Omit<JSX.IntrinsicElements["input"], "type">;

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
