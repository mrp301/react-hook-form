import React, { FC } from "react";
import "./App.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, FirstNameWatched } from "./component";

export type FormType = {
  firstName: string;
  age: number;
  sex: "men" | "woman";
  showOption: boolean;
  address: string;
};

const App: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    watch,
    control,
  } = useForm<FormType>({
    defaultValues: {
      firstName: "",
      age: 0,
      sex: "woman",
    },
  });

  const watchShowOption = watch("showOption");
  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h2>Form Smaple</h2>
      <FirstNameWatched control={control} />

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
          <li>
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: "First Nameは必須です。",
              }}
              render={({ field }) => (
                <Input
                  type="text"
                  label="First Name"
                  {...field}
                  placeholder="名前を入力"
                />
              )}
            />
          </li>
          <li>
            <Controller
              control={control}
              name="age"
              rules={{
                required: "Ageは必須です。",
              }}
              render={({ field }) => (
                <Input
                  label="Age"
                  type="number"
                  {...field}
                  placeholder="年齢を入力"
                />
              )}
            />
          </li>
          <li>
            <label className="label">sex</label>
            <select {...register("sex", { required: true })}>
              <option value="man">man</option>
              <option value="woman">woman</option>
            </select>
          </li>
          <li>
            <label className="label">show options</label>
            <input type="checkbox" {...register("showOption")} />
          </li>
          {watchShowOption && (
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
          )}
        </ul>
        <button className="submitButton" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
