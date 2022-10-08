import "./App.css";
// import About from './components/About';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";


function App() {
  
  return (
    <>
    
      <Navbar title="TextUtils2" imp="About" />
      <div className="container">
        <TextForm heading="Enter the text to analyse" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
