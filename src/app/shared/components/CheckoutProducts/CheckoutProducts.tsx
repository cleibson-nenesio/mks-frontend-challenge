import { useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  removeProduct,
} from "../../../store/features/cart/cart-slice";
import { ProductDataTypes } from "../../../types/product-data";
import { CartProductList, DeleteProduct, Product } from "./CheckoutProducts.styles";

const CheckoutProducts = ({ cartProducts }: any) => {
  const dispatch = useDispatch();

  return (
    <CartProductList>
      {cartProducts.length <= 0
        ? "Adicione itens ao carrinho!"
        : cartProducts.map((product: ProductDataTypes) => {
            return (
              <Product key={product.id}>
                <DeleteProduct onClick={() => dispatch(deleteProduct(product))}>
                  X
                </DeleteProduct>
                <img src={product.photo} alt={product.name} />
                <h3>{product.name}</h3>

                <div>
                  <div className="manage-quantity">
                    <button onClick={() => dispatch(removeProduct(product))}>
                      -
                    </button>
                    <p>{product.cartQuantity}</p>
                    <button onClick={() => dispatch(addProduct(product))}>
                      +
                    </button>
                  </div>
                  <span>R${product.price * 1}</span>
                </div>
              </Product>
            );
          })}
    </CartProductList>
  );
};

export default CheckoutProducts;
