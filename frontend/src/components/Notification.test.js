import React from "react";
import { render } from "@testing-library/react";
import { Notification } from "./Notification";

test("renders notification component", () => {
  expect.assertions(1);

  const component = render(
    <Notification message={{ text: "hello, world", ok: true }} timeout={1000} />
  );
  expect(component.getByText("hello, world")).toBeTruthy();
});
