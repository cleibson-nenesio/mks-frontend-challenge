import { AddToCart } from "./AddToCartButton.styles";

type AddToCartButtonTypes = {
  onClick: () => void,
  children: React.ReactNode
}

const AddToCartButton = (props: AddToCartButtonTypes) => {
  return <AddToCart {...props}>{props.children}</AddToCart>;
};

export default AddToCartButton;
