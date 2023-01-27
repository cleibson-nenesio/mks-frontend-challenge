import { useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  removeProduct,
} from "../../../store/features/cart/cart-slice";
import { ProductDataTypes } from "../../../types/product-data";
import { CartProductList, DeleteProduct, Product, ManageQuantity } from "./CheckoutProducts.styles";

const CheckoutProducts = ({ cartProducts }: { cartProducts: ProductDataTypes[] }) => {
  const dispatch = useDispatch();

  const deleteProductFromList = (product: ProductDataTypes) => {
    dispatch(deleteProduct(product))
  }

  const decreaseProductQuantity = (product: ProductDataTypes) => {
    dispatch(removeProduct(product))
  }

  const increaseProductQuantity = (product: ProductDataTypes) => {
    dispatch(addProduct(product))
  }

  return (
    <CartProductList>
      {cartProducts?.length <= 0
        ? "Adicione itens ao carrinho!"
        : cartProducts?.map((product: ProductDataTypes) => {
            return (
              <Product key={product.id}>
                <DeleteProduct onClick={() => deleteProductFromList(product)}>
                  X
                </DeleteProduct>
                <img src={product.photo} alt={product.name} />
                <h3>{product.name}</h3>

                <div>
                  <ManageQuantity>
                    <button onClick={() => decreaseProductQuantity(product)}>
                      -
                    </button>
                    <p>{product.cartQuantity}</p>
                    <button onClick={() => increaseProductQuantity(product)}>
                      +
                    </button>
                  </ManageQuantity>
                  <span>R${product.price * 1}</span>
                </div>
              </Product>
            );
          })}
    </CartProductList>
  );
};

export default CheckoutProducts;
