import React from "react";
import { render } from "@testing-library/react";
import MadlibsForm from "./MadlibsForm";

it("renders without crashing", function() {
  render(<MadlibsForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<MadlibsForm />);
  expect(asFragment()).toMatchSnapshot();
});
