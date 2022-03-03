import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import { BrowserRouter as Router } from "react-router-dom";

const menu = ["Home", "Results"];

test("renders a message", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  expect(screen.getByAltText("Main Logo")).toBeInTheDocument();
});

test("clicking the menu icon shows/closes the dropdown menu", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const image = screen.getByRole("img", { name: "Menu Icon" });
  fireEvent.click(image);
  expect(screen.getByText("Home")).toBeInTheDocument();
  fireEvent.click(image);
  expect(screen.queryByText("Home")).not.toBeInTheDocument();
});

test("clicking menu item closes the dropdown menu", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const image = screen.getByRole("img", { name: "Menu Icon" });
  fireEvent.click(image);
  expect(screen.getByText("Home")).toBeInTheDocument();
  const home = screen.getByText("Home");
  fireEvent.click(home);
  expect(screen.queryByText("Home")).not.toBeInTheDocument();
});
