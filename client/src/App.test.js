import { render } from "@testing-library/react";
import Header from "./components/Header";
import Form from "./components/Form";

test("renders header component", () => {
  const {} = render(<Header />);
});

test("renders form component", () => {
  const {} = render(<Form />);
});
