import {  Route, Routes } from "react-router-dom";
import "./App.css";

import MainContent from "./Components/MainContent";
import Donate from "./Components/Home/Donation/Donate";


function App() {
  return (
    <>
      <MainContent/>
      
      <Routes>
        <Route path="/done" element={<Donate/>}/>
        <Route/>
      </Routes>
     
    </>
  );
}

export default App;
