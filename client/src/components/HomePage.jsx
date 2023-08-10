import { Welcome, Footer, Services, Transactions } from ".";

const HomePage = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">

      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default HomePage;
