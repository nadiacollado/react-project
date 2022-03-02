import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders a message", () => {
  render(<Header />);
  expect(screen.getByAltText("Main Logo")).toBeInTheDocument();
});

test("clicking the menu icon shows/closes the dropdown menu", () => {
  render(<Header />);
  const image = screen.getByRole("img", { name: "Menu Icon" });
  fireEvent.click(image);
  expect(screen.getByText("Home")).toBeInTheDocument();
  fireEvent.click(image);
  expect(screen.queryByText("Home")).not.toBeInTheDocument();
});

test("clicking menu item closes the dropdown menu", () => {
  render(<Header />);
  const image = screen.getByRole("img", { name: "Menu Icon" });
  fireEvent.click(image);
  expect(screen.getByText("Home")).toBeInTheDocument();
  const home = screen.getByText("Home");
  fireEvent.click(home);
  expect(screen.queryByText("Home")).not.toBeInTheDocument();
});
