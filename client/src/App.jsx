import { Navbar, Transactions } from "./components";
import CoinPage from "./components/CoinPage";
import HomePage from "./components/HomePage";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;

    case "/coin":
      component = <CoinPage />;
      break;

    case "/transactions":
      component = <Transactions />;
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
