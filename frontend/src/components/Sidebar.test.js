import React from "react";
import { render } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

test("uploads file", () => {
  expect.assertions(0);

  const uploadTemperaturesMockFn = jest.fn();
  const changeIsCelsiusMockFn = jest.fn();

  render(
    <Sidebar
      uploadTemperatures={uploadTemperaturesMockFn}
      changeIsCelsius={changeIsCelsiusMockFn}
      isCelsius={true}
    />
  );
});
