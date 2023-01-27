import styled from "styled-components";

export const ProductBox = styled.div`
  max-width: 218px;
  height: 350px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    padding: 12px;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 150px;
  padding: 12px;
`;

export const ProductMainInfo = styled.div`
  .title-and-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .description {
    font-size: 10px;
    color: #2c2c2c;
  }
`;

export const ProductPrice = styled.span`
  padding: 5px 6px;
  background-color: #373737;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
