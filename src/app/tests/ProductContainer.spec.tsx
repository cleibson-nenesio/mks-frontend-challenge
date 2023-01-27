import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "@testing-library/jest-dom";
import ProductBox from "../shared/components/ProductContainer/ProductContainer";
import { Skeleton } from "@mui/material";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderComponent = () => {
  render(
    <Provider store={store}>
      <ProductBox
        products={[
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

describe("ProductContainer", () => {
  it("should render a skeleton, while fetching products", () => {
    renderComponent();

    expect(<Skeleton />).toBeTruthy();
  });

  it("should render a product", async () => {
    renderComponent();

    expect(await screen.findByText("Macbook Pro")).toBeInTheDocument();
  });

  it("should add a product to cart", async () => {
    renderComponent();
    const addToCartBtn = await screen.findByText("Comprar");

    fireEvent.click(addToCartBtn);

    expect(mockDispatch).toHaveBeenCalled();
  });
});
