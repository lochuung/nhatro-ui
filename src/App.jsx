import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Customizer from "./components/Customzier";

function App() {

  return (
    <>
      <Navbar />
      <main className="main" id="top">
        <Header />
        <Outlet />
        <Footer />
        <Customizer />
      </main>
    </>
  );
}

export default App;
