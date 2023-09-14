// import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainContent from "./Components/MainContent";
import About from "./Components/Home/About/About";
import ContactUs from "./Components/Contact/ContactUs";
import Services from "./Components/Services/Services";
import Media from "./Components/Home/MediaUpdates/Media";
import Sadqa from "./Components/Sadqa/Sadqa";
import Sponser from "./Components/Sponser/Sponser";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/media" element={<Media/>} />
        <Route exact path="/donate" element={< Sadqa/>} />
        <Route exact path="/sponser" element={<Sponser />} />
      </Routes>
    </>
  );
}

export default App;
