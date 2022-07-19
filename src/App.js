import "./App.css";
import Main from "./views/Main";
import NavBanner from "./views/NavBanner";
import FooterBanner from "./component/FooterBanner";
import { Container } from "@mui/system";

function App() {
  return (
    <>
      <Container>
      <NavBanner />
      <Main />
      <FooterBanner />
      </Container>
    </>
  );
}

export default App;
