import styled from "styled-components";

const StyledHeader = styled.header`
  max-width: 100%;
  margin: auto;
  margin-top: 1.5rem;
  background: rgb(63, 94, 251);
`;

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  width: 100%;
  color: #fff;
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 800;
  margin: auto;
  font-size: 1.3rem;
`;

const HeaderContent = styled.p`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderTitle>Jean-Claude Van-Damme</HeaderTitle>
        <HeaderTitle> best quotes</HeaderTitle>
        <HeaderContent>Text placeholder generator</HeaderContent>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
