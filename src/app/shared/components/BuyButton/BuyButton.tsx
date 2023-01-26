import { AddToCartButton } from "./BuyButton.styles";

const BuyButton = (props: any) => {
  return <AddToCartButton {...props}>{props.children}</AddToCartButton>;
};

export default BuyButton;
