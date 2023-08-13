import { Welcome, Services, Transactions } from ".";

const HomePage = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Welcome />
    </div>
    <Services />
    <Transactions />
  </div>
);

export default HomePage;
