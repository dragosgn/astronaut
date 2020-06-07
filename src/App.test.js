import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Powered by React link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Powered by React/i);
  expect(linkElement).toBeInTheDocument();
});
