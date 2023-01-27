import styled from "styled-components";

type Props = {
  isOpen: boolean;
};

export const StyledCheckout = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: absolute;
  right: 0;
  top: 0;
  max-height: 100vh;
  width: 487px;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  background-color: #0f52ba;
  color: #ffffff;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  transition: 0.3s;
  animation: ${(props) => (props.isOpen ? "slide-checkout 400ms" : "")};

  @keyframes slide-checkout {
    from {
      right: -150px;
      opacity: 0;
    }

    to {
      right: 0;
      opacity: 1;
    }
  }

  @media (max-width: 425px) {
    width: 330px;
  }
`;

export const CheckoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 47px 0;

  h3 {
    font-size: 27px;
    font-weight: 700;
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
  }
`;

export const CheckoutTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  width: 100%;
  justify-self: flex-end;
  padding: 36px 47px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.5);
`;

export const FinishCheckout = styled.button`
  width: 100%;
  height: 100px;
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  color: #ffffff;
  background-color: #000000;

  @media (max-width: 425px) {
    font-size: 20px;
    height: 65px;
  }
`;
