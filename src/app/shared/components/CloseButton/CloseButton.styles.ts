import styled from "styled-components";
import CloseOutlined from "@mui/icons-material/CloseOutlined";

type CloseButtonTypes = {
    width: number;
    height: number;
}

export const DeleteButton = styled.button<CloseButtonTypes>`
  width: ${({ width }) => width ? `${width}px` :  '15px'};
  height: ${({ height }) => height ? `${height}px` :  '15px'};
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
