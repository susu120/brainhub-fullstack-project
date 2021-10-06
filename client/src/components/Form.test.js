import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";


describe("Create Event form", () => {
  test("render form, input, datePicker and button", () => {
    const { getByTestId, getAllByTestId } = render(<Form />);
    expect(getByTestId("form")).toBeTruthy();
    expect(getAllByTestId("input")).toBeTruthy();
    expect(getByTestId("datePicker")).toBeTruthy();
    expect(getByTestId("button")).toBeTruthy();
  });

});
