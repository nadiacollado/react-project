import { render, screen } from "@testing-library/react";
import GeneApp from "../components/GeneApp";

test("renders a message", () => {
  render(<GeneApp />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
