import { render, screen } from "@testing-library/react";
import { App } from "../components/App/";

test("renders a message", () => {
  render(<App bodyText="Hello" />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
