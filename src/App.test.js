import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const value = 1 + 3;
  expect(value).toBe(4);
});
