import "./App.css";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ShowTime from "./Components/NavbarUpper/ShowTime";

function App() {
  return (
    <>
      <ShowTime />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
