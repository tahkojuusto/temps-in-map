import React from "react";
import { render } from "@testing-library/react";
import { Map } from "./Map";

const TEST_TEMPERATURES = [
  {
    city: "Helsinki",
    lat: "60.1676",
    lon: "24.9421",
    temp: "7.0",
  },
  {
    city: "Stockholm",
    lat: "59.3345",
    lon: "18.0632",
    temp: "11.3",
  },
];

test("renders map component", () => {
  expect.assertions(0);
  render(<Map temperatures={TEST_TEMPERATURES} isCelsius={true} />);
});
