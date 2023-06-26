import gitLogo from '../assets/github.png'
import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={gitLogo} 
      width={72}
      height={72}
      alt="GitHub logo (a cat squid)"
      />
    </Container>
  );
}

export default App;
