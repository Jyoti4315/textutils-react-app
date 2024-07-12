import "./App.css";
import Alert from "./components/Alert.js";
//import About from './components/About.js';
import Navbar from "./components/NavBar.js";
//import Slider from './components/Slider.js';
import TextForm from "./components/TextForm.js";
import React, { useState } from "react";
//import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Textutils Is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils now";
      // }, 1500);
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  }

  return (
    <>
    {/* <Router> */}
        <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Slider/> */}
        <div className="container my-5">
          {/* <Routes> */}
            {/* <Route exact path="/about" >
                <About/>
              </Route>
              <Route exact path="/">
                
              </Route> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
              {/* <Route exact path="/about" element={<About/>}/>
              <Route exact path="/" element={<TextForm/>}/>
          </Routes>       */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
