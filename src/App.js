import "./App.css";
import Main from "./views/Main";
import NavBanner from "./views/NavBanner";
import FooterBanner from "./component/FooterBanner";

function App() {
  return (
    <>
      <NavBanner />
      <Main />
      <FooterBanner />
    </>
  );
}

export default App;
