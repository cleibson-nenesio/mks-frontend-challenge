import {
  StyledCheckout,
  CheckoutHeader,
  CheckoutTotal,
  FinishCheckout,
} from "./Checkout.styles";
import { useStateSelector } from "../../hooks/useStateSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeCart, getTotal } from "../../../store/features/cart/cart-slice";
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import CloseButton from "../CloseButton/CloseButton";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useStateSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart.products]);

  const CloseCheckout = () => {
    dispatch(closeCart())
  }

  cart.isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

  return (
    <StyledCheckout isOpen={cart.isOpen}>
      <CheckoutHeader>
        <h3>
          Carrinho <br />
          de compras
        </h3>

        <CloseButton onClick={CloseCheckout}>
          X
        </CloseButton>
      </CheckoutHeader>

      <CheckoutProducts cartProducts={cart.products} />

      <div>
        <CheckoutTotal>
          <p>Total:</p>
          <p>R${cart.totalAmount}</p>
        </CheckoutTotal>
        <FinishCheckout>Finalizar Compra</FinishCheckout>
      </div>
    </StyledCheckout>
  );
};

export default Checkout;
