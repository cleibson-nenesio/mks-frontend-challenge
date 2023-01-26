import { MainContainerStyled } from "./MainContainer.styles";

type MainContainerTypes = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: MainContainerTypes) => {
  return (
    <MainContainerStyled>
      {children}
    </MainContainerStyled>
  );
};

export default MainContainer;
