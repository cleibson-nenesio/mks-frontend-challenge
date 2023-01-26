import Checkout from "../Checkout/Checkout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import ProductList from "../ProductList/ProductList";

const MainPage = () => {
  return (
    <>
      <Checkout />
      <Header />
      <MainContainer>
        <ProductList />
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainPage;
