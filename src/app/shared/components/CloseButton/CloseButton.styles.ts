import styled from "styled-components";

export const DeleteButton = styled.button`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font-size: 24px;

  @media (max-width: 425px) {
    right: 12px;
    top: 12px;
    font-size: 30px;
    background-color: transparent;
    color: #000000;
  }
`;
