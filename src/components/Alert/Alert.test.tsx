import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Alert from "./Alert";

describe("Running Test for Alert", () => {
  test("Alert Default", () => {
    render(<Alert body="Body" title="Title" />);
    expect(screen.getByText("Title")).toHaveClass("text-green-800");
  });

  test("Alert Type Success", () => {
    render(<Alert body="Body" title="Title" type="success" />);
    expect(screen.getByText("Title")).toHaveClass("text-green-800");
  });

  test("Alert Type Danger", () => {
    render(<Alert body="Body" title="Title" type="danger" />);
    expect(screen.getByText("Title")).toHaveClass("text-red-800");
  });

  test("Alert Type Info", () => {
    render(<Alert body="Body" title="Title" type="info" />);
    expect(screen.getByText("Title")).toHaveClass("text-blue-800");
  });

  test("Alert Type Warning", () => {
    render(<Alert body="Body" title="Title" type="warning" />);
    expect(screen.getByText("Title")).toHaveClass("text-yellow-800");
  });
});
