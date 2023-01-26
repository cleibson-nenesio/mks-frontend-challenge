import { StyledProductList } from "./ProductList.styles";
import ProductBox from "../ProductBox/ProductBox";
import { useStateSelector } from "../../hooks/useStateSelector";

const ProductList = () => {
  const productsList = useStateSelector((state) => state.products);

  return (
    <StyledProductList>
      <ProductBox productList={productsList.data} />
    </StyledProductList>
  );
};

export default ProductList;
