import { Navbar } from "./components";
import Account from "./components/Account";
import CoinPage from "./components/CoinPage";
import HomePage from "./components/HomePage";
import Price from "./components/Price";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;
    case "/price":
      component = <Price />;
      break;
    case "/account":
      component = <Account />;
      break;
    case "/coin":
      component = <CoinPage />;
      break;
    default:
      break;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
