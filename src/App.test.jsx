import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders a hello world", () => {
    const { getByText } = render(<App />);

    const headline = getByText(/hello world/i);

    expect(headline).toBeInTheDocument();
  });
});
