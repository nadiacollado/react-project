import { getByText, render, screen } from "@testing-library/react";
import GeneApp from "./GeneApp";

test("renders a message", () => {
  render(<GeneApp />);
  expect(screen.getByText("Hello Nadia!")).toBeInTheDocument();
});

test("renders the header component", () => {
  render(<GeneApp />);
  expect(screen.getByText("This is the header!")).toBeInTheDocument();
});
