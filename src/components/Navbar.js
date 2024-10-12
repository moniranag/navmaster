import React, { useState } from "react";
import PropTypes from "prop-types";
import Colorpalette from "./Colorpalette";
// import { Link } from "react-router-dom";

export default function Navbar(Props) {
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
  //   const brightness = Props.getBrightness(selectedColor);

  //   // Determine text color based on brightness
  //   const fontColor = brightness > 400 ? 'black' : 'white';
  //   setTextColor(fontColor);

  // }

  // const [hover, setHover] = useState(false);
  // const hoverTimeout = useState(false);

  // const handleMouseEnter = () => {
  //     const time = setTimeout(() => {
  //         setHover(true);
  //     }, 1500);
  // }

  // const handleMouseLeave = () => {
  //     const timeLeave = setTimeout(() => {
  //         setHover(false);
  //     }, 0.5);
  // }

  // setTextColor={setTextColor}
  // style={{ padding: '8px 8px 15px 8px' }}

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {Props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {Props.aboutText}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              {/* <Colorpalette style={{marginRight: '50px'}} colorText="Pick any color"/> */}
              <Colorpalette
                colorText="Pick any color"
                mode={Props.mode}
                color={Props.color}
                pickerColor={Props.pickerColor}
                setColor={Props.setColor}
                getBrightness={Props.getBrightness}
                textColor={Props.textColor}
                setTextColor={Props.setTextColor}
              />
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ color: Props.mode === "light" ? "black" : "white" }}
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div
          className={`form-check form-switch text-${Props.mode === "light" ? "dark" : "light"
            }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={Props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Dark
          </label>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// Navbar.defaultProps = {
//     title: "stranger 2",
//     aboutText: "about 1"
// }
