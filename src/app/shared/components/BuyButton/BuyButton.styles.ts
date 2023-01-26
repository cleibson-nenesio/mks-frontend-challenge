import styled from "@emotion/styled";

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #0f52ba;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 0.6s;
  gap: 10px;

  &:hover {
    opacity: 0.7;
  }
`;
