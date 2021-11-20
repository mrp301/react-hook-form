import React, { VFC } from "react";
import { useFormContext } from "react-hook-form";

export const Confirm: VFC = () => {
  const { getValues } = useFormContext();
  const values = getValues();
  const keys = Object.keys(values);

  return (
    <main>
      <h2>Confirm</h2>
      <table>
        <tbody>
          {keys.map((key) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{values[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
