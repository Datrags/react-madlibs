import React from "react";
import { render } from "@testing-library/react";
import Story from "./Story";

const storyData = {
    name: "Joe",
    adj1: "Fuzzy",
    adj2: "Nimble",
    animal: "Giraffe",
    plural_noun: "Chickens",
    adj3: "Fragrant",
    adj4: "Luminous",
    verb_ing: "Jumping",
    noun: "Nacho",
    adj5: "Zealous"
}

it("renders without crashing", function() {
  render(<Story wordsObj={storyData}/>);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Story wordsObj={storyData}/>);
  expect(asFragment()).toMatchSnapshot();
});

// it("renders a full story with data inputted", function() {
//     const story = render(<Story wordsObj={storyData}/>)
//     const giraffe = story.getByText(`Once upon a time, there was a Fuzzy guy named Joe.`);
//     expect(giraffe).toBeInTheDocument();
// })