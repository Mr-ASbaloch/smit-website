import "./App.css";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ShowTime from "./Components/NavbarUpper/ShowTime";

function App() {
  return (
    <>
      <ShowTime />
      <Navbar />
      <Home />
      <Footer/>
      
    </>
  );
}

export default App;
