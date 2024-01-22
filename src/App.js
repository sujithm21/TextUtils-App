//import logo from './logo.svg';
import "./App.css";
import Alert from "./Components/Alert";
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   RouterProvider,
//   Routes,
//   Route
// } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState("hi");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    // setTimeout(() => {
    //   setAlert(null)
    // },1500)

  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled","success");
      document.title = 'Text Utils - Dark Mode'

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      document.title = 'Text Utils -Light Mode'
    } 
  };

  return (
    <>
      {/* <Router>   */}
      <Navbar
        title="TextUtils"
        about="Link"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <TextForm showAlert = {showAlert} heading="Enter your text" mode={mode} />

      <div className="container my-3">
        {/* <About/>  */}
        
        {/* <Routes>
                <Route path="/about" element = {<About />} />
                  
                <Route path="/" elemnt  = {<TextForm showAlert = {showAlert} heading="Enter your text" mode={mode} />} />

        </Routes>  */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
