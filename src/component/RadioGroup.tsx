import React, { VFC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Radio } from "./Radio";

type Props = {
  formName: string;
  formValues: string[] | number[];
};

export const RadioGroup: VFC<Props> = ({ formName, formValues }) => {
  const { control } = useFormContext();

  return (
    <ul className="radioList">
      <Controller
        control={control}
        name={formName}
        render={({ field: { name, ref, onChange, value } }) => (
          <>
            {formValues.map((formValue) => (
              <li key={formValue}>
                <Radio
                  value={formValue}
                  name={name}
                  onChange={onChange}
                  ref={ref}
                  defaultChecked={value === formValue}
                />
              </li>
            ))}
          </>
        )}
      />
    </ul>
  );
};
