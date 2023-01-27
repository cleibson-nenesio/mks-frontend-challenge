import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CheckoutProducts from "../shared/components/CheckoutProducts/CheckoutProducts";
import { store } from "../store/store";
import "@testing-library/jest-dom";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderComponent = () => {
  render(
    <Provider store={store}>
      <CheckoutProducts
        cartProducts={[
          {
            id: 5,
            name: "Macbook Pro",
            photo: "https://via.placeholder.com/150",
            description: "description",
            price: 2000,
            cartQuantity: 5,
          },
        ]}
      />
    </Provider>
  );
};

describe("CheckoutProducts", () => {
  it("should render a list os products added to cart", () => {
    renderComponent()

    expect(screen.getByText("Macbook Pro")).toBeInTheDocument();
  });

  it("should increase product quantity", () => {
    renderComponent()

    const increaseQuantityBtn = screen.getByText("+");
    fireEvent.click(increaseQuantityBtn);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should decrease product quantity", () => {
    renderComponent()

    const decreaseQuantityBtn = screen.getByText("-");
    fireEvent.click(decreaseQuantityBtn);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should remove the product from the cart", () => {
    renderComponent()

    const removeProductBtn = screen.getByText("X");
    fireEvent.click(removeProductBtn);

    expect(mockDispatch).toHaveBeenCalled();
  })
});
