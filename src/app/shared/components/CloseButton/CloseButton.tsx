import { DeleteButton } from "./CloseButton.styles";

type CloseButtonTypes = {
  onClick: () => void,
  children: React.ReactNode
}

const CloseButton = (props: CloseButtonTypes) => {
  return (
    <DeleteButton {...props}>
     {props.children}
    </DeleteButton>
  );
};

export default CloseButton;
