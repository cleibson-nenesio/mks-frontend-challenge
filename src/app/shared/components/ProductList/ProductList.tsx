import { StyledProductList } from "./ProductList.styles";
import ProductBox from "../ProductContainer/ProductContainer";
import { useStateSelector } from "../../hooks/useStateSelector";

const ProductList = () => {
  const products = useStateSelector((state) => state.products);

  return (
    <StyledProductList>
      <ProductBox products={products.data} />
    </StyledProductList>
  );
};

export default ProductList;
