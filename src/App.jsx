import {
  Home,
  Loader,
  Navbar,
  Services,
  Transactions,
  Footer,
} from "./components";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Home />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
