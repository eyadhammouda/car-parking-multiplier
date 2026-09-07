import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the welcome page", () => {
  render(<App />);
  expect(
    screen.getByText("Welcome to Freiburg Central Parking")
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Open Gate" })).toBeInTheDocument();
});
