import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Madlibs from "./Madlibs";

it("renders without crashing", function() {
  render(<Madlibs />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Madlibs />);
  expect(asFragment()).toMatchSnapshot();
});

// it("should show the story", function() {
//     const madlibs = render(<Madlibs/>);
//     fireEvent.click(madlibs.getByText("Submit"));
//     let story = madlibs.queryByText(
//         "Once"
//     );
//     expect(story).toBeIntheDocument();
// })