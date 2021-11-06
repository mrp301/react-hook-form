import React, { VFC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Edit, Confirm } from "./page";
import { useForm, FormProvider } from "react-hook-form";
import "./App.css";

export type FormType = {
  firstName: string;
  age: number;
  sex: "men" | "woman";
  showOption: boolean;
  address: string;
  sns: "Twitter" | "Line" | "Instagram";
};

const App: VFC = () => {
  const methods = useForm<FormType>({
    defaultValues: {
      firstName: "",
      age: 0,
      sex: "woman",
    },
  });

  return (
    <div className="App">
      <FormProvider {...methods}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Edit />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </div>
  );
};

export default App;
