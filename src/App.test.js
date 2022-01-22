import { render, screen } from "@testing-library/react";
import App from "./App";

test("runs without crashing", () => {
  render(<App />);
  const linkElement = screen.getByText(/today/i);
  expect(linkElement).toBeInTheDocument();
});
