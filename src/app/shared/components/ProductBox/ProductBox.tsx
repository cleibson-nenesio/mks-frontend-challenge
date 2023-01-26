import { ProductDataTypes } from "../../../types/product-data";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/features/cart/cart-slice";
import { useStateSelector } from "../../hooks/useStateSelector";
import { Skeleton } from "@mui/material";
import BuyButton from "../BuyButton/BuyButton";
import {
  ProductContainer,
  ProductMainInfo,
  ProductImage,
  ProductPrice,
} from "./ProductBox.styles";
import { ShoppingBagOutline } from "@styled-icons/evaicons-outline";

type ProductBoxTypes = {
  productList: ProductDataTypes[];
};

const skeletons = new Array(8);
skeletons.fill(
  <Skeleton
    sx={{ bgcolor: "grey.350" }}
    variant="rounded"
    width={218}
    height={350}
  />
);

const ProductBox = ({ productList }: ProductBoxTypes) => {
  const dispatch = useDispatch();
  const isLoading = useStateSelector((state) => state.products.isLoading);

  if (isLoading) {
    return (
      <>
        {skeletons.map((skeleton, index) => (
          <div key={index}>{skeleton}</div>
        ))}
      </>
    );
  }

  return (
    <>
      {productList.map((product: ProductDataTypes) => {
        return (
          <ProductContainer key={product.id}>
            <ProductImage src={product.photo} alt={product.name} />
            <ProductMainInfo>
              <div className="title-and-price">
                <p>{product.name}</p>
                <ProductPrice>R${product.price * 1}</ProductPrice>
              </div>

              <div className="description">{product.description}</div>
            </ProductMainInfo>
            <BuyButton onClick={() => dispatch(addProduct(product))}>
              <ShoppingBagOutline width={18} />
              Comprar
            </BuyButton>
          </ProductContainer>
        );
      })}
    </>
  );
};

export default ProductBox;
