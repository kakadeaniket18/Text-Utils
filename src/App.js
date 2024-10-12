import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
const showAlert = (message, type) =>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  },3000);
}
const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#000';
    showAlert(" Dark Mode has been Enabled","info")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert(" Light Mode has been Enabled","info")
  }
}
return (
<>

{/* <Router> */}
    <strong><Navbar title="TEXT-UTILS" mode={mode} toggleMode={toggleMode}/></strong>
    <div className="container"><Alert alert={alert}/></div>
    <div className="container  my-2">
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}  
    {/* </Routes> */}
    {/* <Route exact path="/" element= */}
    </div>
{/* </Router> */}

</>
);
}
export default App;
