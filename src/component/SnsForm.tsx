import React, { FC } from "react";
import { Radio } from "./Radio";
import { Controller, useFormContext } from "react-hook-form";

export const SnsForm: FC = () => {
  const { control } = useFormContext();

  return (
    <li>
      <label className="label">SNS</label>
      <ul className="radioList">
        <li>
          <Controller
            control={control}
            name="sns"
            render={({ field: { name, ref, onChange } }) => (
              <Radio
                value="Twitter"
                name={name}
                onChange={onChange}
                ref={ref}
              />
            )}
          />
        </li>
        <li>
          <Controller
            control={control}
            name="sns"
            render={({ field: { name, ref, onChange } }) => (
              <Radio
                value="Line"
                name={name}
                onChange={onChange}
                ref={ref}
              />
            )}
          />
        </li>
        <li>
          <Controller
            control={control}
            name="sns"
            render={({ field: { name, ref, onChange } }) => (
              <Radio
                value="Instagram"
                name={name}
                onChange={onChange}
                ref={ref}
              />
            )}
          />
        </li>
      </ul>
    </li>
  );
};
