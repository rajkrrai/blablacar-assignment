import { render, screen } from "@testing-library/react";
import App from "./App";

//test 1: app loads/mount without failure
test("App runs without crashing", () => {
  render(<App />);
  const linkElement = screen.getByText(/today/i);
  expect(linkElement).toBeInTheDocument();
});
