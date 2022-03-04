import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import { Router, BrowserRouter } from "react-router-dom";
const { createMemoryHistory } = require("history");

test("renders a message", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(screen.getByAltText("Main Logo")).toBeInTheDocument();
});

test("clicking menu icon opens/closes the dropdown menu", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const image = screen.getByRole("img", { name: "Menu Icon" });
  fireEvent.click(image);
  expect(screen.getByText("Home")).toBeInTheDocument();
  fireEvent.click(image);
  expect(screen.queryByText("Home")).not.toBeInTheDocument();
});

test("clicking menu item closes the dropdown menu", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const image = screen.getByRole("img", { name: "Menu Icon" });
  fireEvent.click(image);
  expect(screen.getByText("Home")).toBeInTheDocument();
  const home = screen.getByText("Home");
  fireEvent.click(home);
  expect(screen.queryByText("Home")).not.toBeInTheDocument();
});

test("clicking menu item routes to correct path", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>
  );

  const image = screen.getByRole("img", { name: "Menu Icon" });
  fireEvent.click(image);
  expect(screen.getByText("Home")).toBeInTheDocument();
  fireEvent.click(screen.getByText("My Results"));
  expect(history.location.pathname).toEqual("/results");
});
