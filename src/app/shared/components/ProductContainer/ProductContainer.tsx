import { ProductDataTypes } from "../../../types/product-data";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/features/cart/cart-slice";
import { useStateSelector } from "../../hooks/useStateSelector";
import { Skeleton, Snackbar, Alert } from "@mui/material";
import BuyButton from "../AddToCartButton/AddToCartButton";
import {
  ProductBox,
  ProductImage,
  ProductPrice,
  TitleAndPrice,
  Description,
} from "./ProductContainer.styles";
import { ShoppingBagOutline } from "@styled-icons/evaicons-outline";
import { useState } from "react";

type ProductBoxTypes = {
  products: ProductDataTypes[];
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

const ProductContainer = ({ products }: ProductBoxTypes) => {
  const dispatch = useDispatch();
  const productsStates = useStateSelector((state) => state.products);
  const [isSnackOpen, setIsSnackOpen] = useState(false);

  const closeSnackBar = () => {
    setIsSnackOpen(false);
  };

  const openSnackBar = () => {
    setIsSnackOpen(true);
  };

  const addProductToCart = (product: ProductDataTypes) => {
    dispatch(addProduct(product));
    openSnackBar();
  };

  if (productsStates.isLoading) {
    return (
      <>
        {skeletons.map((skeleton, index) => (
          <div key={index}>{skeleton}</div>
        ))}
      </>
    );
  }

  if (productsStates.status == "rejected") {
    return (
      <>
        <h2>Houve algum erro...</h2>
      </>
    );
  }

  return (
    <>
      {products.map((product: ProductDataTypes) => {
        return (
          <ProductBox key={product.id}>
            <ProductImage src={product.photo} alt={product.name} />
            <div>
              <TitleAndPrice>
                <p>{product.name}</p>
                <ProductPrice>R${product.price * 1}</ProductPrice>
              </TitleAndPrice>

              <Description>{product.description}</Description>
            </div>
            <BuyButton onClick={() => addProductToCart(product)}>
              <ShoppingBagOutline width={18} />
              Comprar
            </BuyButton>
          </ProductBox>
        );
      })}

      <Snackbar
        open={isSnackOpen}
        autoHideDuration={1500}
        onClose={closeSnackBar}
      >
        <Alert
          onClose={closeSnackBar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Produto adicionado ao carrinho
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductContainer;
