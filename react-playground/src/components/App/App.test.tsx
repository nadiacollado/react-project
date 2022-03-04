import { render, screen } from "@testing-library/react";
import { App } from ".";

test("renders a message", () => {
  render(<App />);
  expect(screen.getByText("This is the home page")).toBeInTheDocument();
});
