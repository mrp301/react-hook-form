import React, { VFC } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { RequiredForms, OptionalForms } from "../component";
import { useNavigate } from "react-router-dom";
import { FormType } from "../App";

export const Edit: VFC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = useFormContext();

  const watchShowOption = watch("showOption");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormType> = () => {
    if (!isValid) {
      alert("入力内容に問題があります。");
      return;
    }

    navigate("/confirm");
  };

  return (
    <main>
      <h2>Edit Page</h2>

      {!isValid && isSubmitted && (
        <ul className="errorList">
          {errors.firstName?.type === "required" && (
            <li>First Name is required</li>
          )}
          {errors.age?.type === "required" && (
            <li>age is required</li>
          )}
          {errors.sex?.type === "value" && <li>sex is required</li>}
        </ul>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="formLayout">
          <RequiredForms />
          <li>
            <label className="label">show options</label>
            <input type="checkbox" {...register("showOption")} />
          </li>
          {watchShowOption && <OptionalForms />}
        </ul>
        <button className="submitButton" type="submit">
          confirm
        </button>
      </form>
    </main>
  );
};
