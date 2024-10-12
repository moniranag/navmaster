import React, { useState } from "react";
// import { useEffect } from 'react';
// import { SketchPicker } from 'react-color'

export default function Colorpalette(Props) {
  // const [color, setColor] = useState("fff");

  const [color, setColor] = useState(" ");
  // const [textColor, setTextColor] = useState('black');

  const getBrightness = (hexColor) => {
    hexColor = hexColor.replace("#", "");
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
    const brightness = r + g + b;
    return brightness;
  };

  const pickerColor = (event) => {
    const selectedColor = event.target.value; // Get the selected color
    setColor(selectedColor);
    document.body.style.backgroundColor = selectedColor;

    // Calculate brightness of the selected color
    const brightness = getBrightness(selectedColor);

    // Determine text color based on brightness
    const fontColor = brightness > 400 ? "black" : "white";
    Props.setTextColor(fontColor);
  };

  const [hover, setHover] = useState(false);
  // const hoverTimeout = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setHover(true);
    }, 1500);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHover(false);
    }, 0.1);
  };

  return (
    <div
      style={{ width: "560px", height: '65px' }}
    // onMouseEnter={handleMouseEnter}
    // onMouseLeave={handleMouseLeave}
    >

      {/* <strong>
        <label
          style={{
            marginRight: "20px",
            color: Props.mode === "dark" ? "white" : Props.textColor || "black",
          }}
        >
          {/* {hover ? "" : Props.colorText} */}
      {/* </label> */}
      {/* </strong> */}


      {/* <label
          style={{
            paddingBottom: '1px',
            color: Props.mode === "dark" ? "white" : Props.textColor || "black",
          }}
        >
           {hover ? "" : Props.colorText} 
         </label>  */}


      <div>
        <input style={{ marginTop: '20px' }}
          type="color"
          id="colorPicker"
          onChange={pickerColor}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          value={color}
        />


        {/* <strong> */}
        <label
          style={{
            paddingLeft: "20px", position: 'relative', bottom: '10px',
            color: Props.mode === "dark" ? "white" : Props.textColor || "black",
          }}
        >
          <strong>{hover ? "" : Props.colorText}</strong>
        </label>
        {/* </strong>  */}


        {/* <strong style={{marginLeft: '20px'}}>{hover ? "" : Props.colorText}</strong> */}

        {/* <div style={{position: 'relative' ,top:'15px'}}> */}
        <span
          style={{
            color: Props.mode === "dark" ? "white" : Props.textColor || "black", marginBottom: '12px', display: 'inline-block'
          }}
        >
          {!hover && (
            <>
              <strong style={{ marginLeft: '69px', paddingBottom: '30px' }}>Selected color:</strong> {color}
            </>
          )}
        </span>
        {/* <input type="color" id="colorPicker" style={{ width: "80px", height: "50px" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onChange={Props.pickerColor} value={Props.color} /> */}
        {/* </div> */}
      </div>
    </div>
  );
}
