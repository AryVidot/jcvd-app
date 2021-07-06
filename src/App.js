import { AppContainer } from "./components/Container.style";
import { GlobalStyles } from "./components/GlobalStyle.style";
import Header from "./components/Header";
function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
    </AppContainer>
  );
}

export default App;
