import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Running Test for Menu Button", () => {
  test("Check Button Enabled", () => {
    render(<Button primary>Button Text</Button>);
    expect(
      screen.getByRole("button", { name: "Button Text" })
    ).not.toBeDisabled();
  });
});
