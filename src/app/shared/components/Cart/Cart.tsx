import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useStateSelector } from "../../hooks/useStateSelector";
import { useDispatch } from "react-redux";
import { openCart } from "../../../store/features/cart/cart-slice";
import { ProductCart } from "./Cart.styles";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useStateSelector((state) => state.cart);

  return (
    <>
      <ProductCart onClick={() => dispatch(openCart())}>
        <ShoppingCartOutlinedIcon />
        <p>{cart.products.length}</p>
      </ProductCart>
    </>
  );
};

export default Cart;
