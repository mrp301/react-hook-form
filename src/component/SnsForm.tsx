import React, { FC } from "react";
import { Radio } from "./Radio";
import { Controller, useFormContext } from "react-hook-form";

export const SnsForm: FC = () => {
  const { control } = useFormContext();
  const snsNames = ["Twitter", "Line", "Instagram"];

  return (
    <li>
      <label className="label">SNS</label>
      <ul className="radioList">
        <Controller
          control={control}
          name="sns"
          render={({ field: { name, ref, onChange, value } }) => (
            <>
              {snsNames.map((snsName) => (
                <li key={snsName}>
                  <Radio
                    value={snsName}
                    name={name}
                    onChange={onChange}
                    ref={ref}
                    defaultChecked={value === snsName}
                  />
                </li>
              ))}
            </>
          )}
        />
      </ul>
    </li>
  );
};
