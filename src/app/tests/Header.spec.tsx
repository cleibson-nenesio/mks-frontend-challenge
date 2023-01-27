import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../shared/components/Header/Header";
import { store } from "../store/store";
import '@testing-library/jest-dom'

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderComponents = () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  return { store }
};

describe("Header", () => {
  it("should display Header", () => {
    renderComponents()

    expect(screen.getByText("MKS")).toBeInTheDocument();
  });

  it("should open checkout when hits the button", () => {
    renderComponents()
    const btnCart = screen.getByRole("button");
    
    fireEvent.click(btnCart);

    expect(mockDispatch).toHaveBeenCalled();
  });
});
