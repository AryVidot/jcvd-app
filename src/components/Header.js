import styled from "styled-components";

const StyledHeader = styled.header`
  width: 90%;
  max-width: 1440px;
  margin: auto;
  margin-top: 10%;
  border: 1px solid red;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-family: "Merriweather Sans", sans-serif;
  font-size: 25px;
  font-weight: 800;
`;

const HeaderContent = styled.p`
  color: #fff;
  font-family: "Open Sans", sans-serif;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderTitle>Jean-Claude Van-Damme best quotes</HeaderTitle>
      <HeaderContent>Text placeholder generator</HeaderContent>
    </StyledHeader>
  );
};

export default Header;
