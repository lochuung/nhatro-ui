import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <main className="main" id="top">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
