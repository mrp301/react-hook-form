import React, { forwardRef } from "react";

type Props = {
  label: string;
  values: {
    value: string;
    text: string;
  }[];
} & JSX.IntrinsicElements["select"];

/* eslint-disable react/display-name */
export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ label, values, ...props }, ref) => {
    return (
      <>
        <label className="label">{label}</label>
        <select ref={ref} {...props}>
          {values.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </>
    );
  }
);
