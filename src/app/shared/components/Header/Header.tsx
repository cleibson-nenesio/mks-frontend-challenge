import Cart from "../Cart/Cart";
import "./Header.styles";
import { StyledHeader } from "./Header.styles";

const Header = () => (
  <StyledHeader>
    <a href="#">
        <h1>MKS <span>Sistemas</span></h1>
    </a>

    <Cart />
  </StyledHeader>
);

export default Header;
