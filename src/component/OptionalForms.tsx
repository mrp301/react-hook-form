import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./Input";
import { SnsForm } from "./SnsForm";

export const OptionalForms: FC = () => {
  const { control } = useFormContext();

  return (
    <>
      <li>
        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <Input
              label="Address"
              type="text"
              {...field}
              placeholder="住所を入力"
            />
          )}
        />
      </li>
      <SnsForm />
    </>
  );
};
