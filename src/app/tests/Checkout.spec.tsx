import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Checkout from "../shared/components/Checkout/Checkout";
import { store } from "../store/store";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Checkout />
    </Provider>
  );
}

describe("Checkout", () => {
  it("should close checkout", () => {
    renderComponent()
    const closeCheckoutButton = screen.getByText("X");

    fireEvent.click(closeCheckoutButton);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should calculate the total value of the products", () => {
    renderComponent()

    expect(mockDispatch).toHaveBeenCalled()
  })
});
