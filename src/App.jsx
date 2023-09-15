// import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainContent from "./Components/MainContent";
// import About from "./Components/Home/About/About";
import ContactUs from "./Components/Contact/ContactUs";
import Services from "./Components/Services/Services";

import Sadqa from "./Components/Sadqa/Sadqa";
import Sponser from "./Components/Sponser/Sponser";
import Intro from "./Components/ChairmanMEssage/Intro";
import Books from "./Components/Books/Books";
import Smit from "./Components/SMIT/Smit";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route exact path="/about" element={<Intro />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/services" element={<Smit/>} />
        <Route exact path="/media" element={<Books />} />
        <Route exact path="/donate" element={<Sadqa />} />
        <Route exact path="/sponser" element={<Sponser />} />
      </Routes>
     
    </>
  );
}

export default App;
