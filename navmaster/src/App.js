import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Proptype from 'prop-types'


function App() {
  // const [mode, setMode]  = useState('light');  // Weather dark mode is enabled or not .
  // const [text,setText] = useState("Enable Dark Mode");

  // const togglemode=()=>{
  //   if (mode.color==="black"){
  //     setMode({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     })
  //     setText("Enable Light Mode");
  //   }
  //   else{
  //     setMode({
  //       color:'black',
  //       backgroundColor: 'white'
  //     })
  //     setText("Enable Dark Mode");
  //   }

  // }

  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(" ");




  const showAlert = (message,type)=>{            // inside function there is an object setAlert
    setAlert({
      msg: message,
      type:type
    })
  }




  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "#5d301f";
      showAlert("dark mode is enabled", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
    }
  }




  return (
    <div className="App">
      <Navbar title="TextUtils" aboutText="About Content Here" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container justify-content-center align-items-center">
        <TextForm heading="Enter the text to analize below" mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert} />
        {/* <About /> */}
      </div>

    </div>


  );
}

export default App;



