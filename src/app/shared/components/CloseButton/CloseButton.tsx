import { DeleteButton } from "./CloseButton.styles";

const CloseButton = (props: any) => {
  return (
    <DeleteButton {...props}>
     {props.children}
    </DeleteButton>
  );
};

export default CloseButton;
