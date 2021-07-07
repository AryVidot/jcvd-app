import { AppContainer } from "./components/Container.style";
import { GlobalStyles } from "./components/GlobalStyle.style";
import Header from "./components/Header";
import ControlsContainer from "./components/ControlsContainer";
import ContentIpsum from "./components/ContentIpsum";
function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <ControlsContainer />
      <ContentIpsum />
    </AppContainer>
  );
}

export default App;
