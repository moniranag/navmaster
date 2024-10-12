import "./App.css";
import React, { useState } from "react";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Colorpalette from "./components/Colorpalette";
// import { BrowserRouter } from "react-router-dom";
// import { SketchPicker } from 'react-color'
// // import Proptype from 'prop-types'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";

// import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, Routes } from 'react-router-dom';

// import {
//   createRoutesFromElements,
//   createBrowserRouter,
//   Route,
// } from "react-router-dom";


// import {
//   BrowerRouter as Router,
//   Switch,
//   Route,
//   // Link,
//   BrowserRouter
// } from 'react-router-dom';


function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <TextForm
  //       heading="Enter the text to analize below"
  //       mode={mode}
  //       toggleMode={toggleMode}
  //       alert={alert}
  //       showAlert={showAlert}
  //       textColor={textColor} />
  //   },

  //   {
  //     path: "/",
  //     element: <About />
  //   }
  // ])


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

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(false);

  const showAlert = (message, type) => {
    // inside function there is an object setAlert
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  // const [textColor, setTextColor] = useState('black');

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#493131";
      showAlert("dark mode is enabled :", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtills is amazing' ;
      // }, 2000);                                                   //Blink the title 
      // setInterval(()=>{
      //   document.title = 'TextUtils yes yes yes';
      // },1500);

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled :", "success");
      // document.title = 'TextUtils - Light Mode';

    }
  };

  //   const [color, setColor] = useState("fff");
  //   const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3' ,'#FFB6C1', '#8A2BE2', '#20B2AA', '#FF4500','#7FFF00', '#FFD700',   '#FF6347',
  //     '#4682B4', '#008080','#FFE4B5',  '#808080',  '#000000', '#FFFFFF', '#C0C0C0',  '#A52A2A' ]

  //   const changeColor = () => {
  //   setColor(colors.hex);
  // }

  // const [color, setColor] = useState(" ");
  const [textColor, setTextColor] = useState("black");

  // const getBrightness = (hexColor) => {
  //   hexColor = hexColor.replace('#', '');
  //   const r = parseInt(hexColor.substr(0, 2), 16);
  //   const g = parseInt(hexColor.substr(2, 2), 16);
  //   const b = parseInt(hexColor.substr(4, 2), 16);
  //   const brightness = r + g + b;
  //   return brightness;
  // };

  // const pickerColor = (event) => {

  //   const selectedColor = event.target.value;  // Get the selected color
  //   setColor(selectedColor);
  //   document.body.style.backgroundColor = selectedColor;

  //   // Calculate brightness of the selected color
  //   const brightness = getBrightness(selectedColor);

  //   // Determine text color based on brightness
  //   const fontColor = brightness > 400 ? 'black' : 'white';
  //   setTextColor(fontColor);

  // }

  // const [warn,setWarn] = useState(" ");

  // // const inputPicker = selectedColor ;
  // // setWarn(inputPicker);

  // setTimeout(()=>{
  //   setWarn{$selectedColor}

  // },1500);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <TextForm
  //       heading="Enter the text to analize below"
  //       mode={mode}
  //       toggleMode={toggleMode}
  //       alert={alert}
  //       showAlert={showAlert}
  //       textColor={textColor} />
  //   },

  //   {
  //     path: "/about",
  //     element: <About />
  //   },
  // ])


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TextForm
        heading="Enter the text to analize below"
        mode={mode}
        toggleMode={toggleMode}
        alert={alert}
        showAlert={showAlert}
        textColor={textColor} />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>


  return (
    // <>
    <div className="App">
      <Navbar
        title="TextUtils"
        aboutText="About Content Here"
        mode={mode}
        toggleMode={toggleMode}
        Colorpalette={Colorpalette}
        setTextColor={(color) => setTextColor(color)}
      />

      <Alert alert={alert} />
      {/* <Colorpalette colorText="Pick any color" mode={mode} color={color} pickerColor={pickerColor} setColor={setColor} getBrightness={getBrightness} textColor={textColor} setTextColor={setTextColor} /> */}
      <div className="container justify-content-center align-items-center">
        {/* <TextForm
          heading="Enter the text to analize below"
          mode={mode}
          toggleMode={toggleMode}
          alert={alert}
          showAlert={showAlert}
          textColor={textColor}
        />

        <About /> */}

        {/* <RouterProvider router={router} /> */}

      </div>
    </div>
    // </>
  );
}

export default App;
