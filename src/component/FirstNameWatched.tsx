import React, { FC } from "react";
import { useWatch, Control } from "react-hook-form";
import { FormType } from "../App";

type Props = {
  control: Control<FormType>;
};

export const FirstNameWatched: FC<Props> = ({ control }) => {
  const firstName = useWatch({
    control,
    name: "firstName",
    defaultValue: "",
  });

  return <p>fitstName: {firstName}</p>;
};
