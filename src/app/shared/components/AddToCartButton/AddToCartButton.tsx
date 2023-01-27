import { AddToCart } from "./AddToCartButton.styles";

const AddToCartButton = (props: any) => {
  return <AddToCart {...props}>{props.children}</AddToCart>;
};

export default AddToCartButton;
