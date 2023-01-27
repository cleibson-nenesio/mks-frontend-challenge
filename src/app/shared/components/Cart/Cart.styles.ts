import styled from "@emotion/styled";

export const ProductCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px 20px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 8px;
  color: #000000;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;

  @media (max-width: 425px) {
    padding: 5px 10px;
  }
`;
