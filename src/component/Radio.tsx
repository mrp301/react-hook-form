import React, { forwardRef } from "react";

type Props = Omit<JSX.IntrinsicElements["input"], "type">;

/* eslint-disable react/display-name */
export const Radio = forwardRef<HTMLInputElement, Props>(
  ({ value, name, ...props }, ref) => {
    const id = `${name}-${value}`;

    return (
      <div>
        <input
          id={id}
          name={name}
          type="radio"
          {...props}
          value={value}
          ref={ref}
        />
        <label htmlFor={id}>{value}</label>
      </div>
    );
  }
);
