

import './App.css';
import About from './Components/About';
//import Navbar from './Components/Navbar';
import TestForm from './Components/TestForm';
import React, { useState } from 'react'
//import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ReactDOM from "react-dom/client";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      showAlert("Dark mode enabled successfully",'success');
      document.body.style.backgroundColor='#23224c';
    }
    else{
      setMode('light');
      showAlert("Light mode enabled successfully",'success');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <BrowserRouter>
    <Routes>
    {/* <Navbar title="TextUtils" aboutText="About text here" mode={mode} toggleMode={toggleMode} /> */}
       <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
       <Route path="/" element={<div><TestForm title="Enter text here" toggleMode={toggleMode} mode={mode} showAlert={showAlert} alert={alert} /></div>} />
          
          </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
