import GlobalStyle from './styles/GlobalStyle';
import Routers from './Router';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routers />
    </Container>
  );
}

export default App;

export const Container = styled.div`
  min-width: 360px;
  max-width: 450px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
