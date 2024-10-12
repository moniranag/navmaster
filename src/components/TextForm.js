
import React, { useState } from 'react'
// import Colorpalette from './Colorpalette';

export default function TextForm(Props) {

    // const handleUpClick = () => {
    //     console.log("Uppercase was clicked");
    //     setText("You have clicked on handleUpClick");
    // }

    // const handleOnChange= ()=>{
    //     console.log("On Change");
    // }

    // const textEntered =()=>{
    //     console.log('yes text entered function runs');
    // }

    // const buttonClick =()=>{
    //     console.log("Button clicked");
    // }
    // const textChange = (event) => {
    //     setState(event.target.value);
    // }



    // const upperText = () => {
    //     setState(state.toUpperCase());
    //     console.log("yes text is in upper case");
    // }

    // const lowerText = () => {
    //     let newText = state.toLowerCase();
    //     setState(newText);

    //     // setState(state.toLowerCase());
    // }


    // Function to handle text change
    //   const handleChange = (e) => {
    //     setText(e.target.value); // Update the current text
    //   };

    // const textTransform = ({ alert, setAlert }) => {

    // }

    const [state, setState] = useState("");   //state: This holds the actual text that the user types into the textarea. Initially, it's an empty string ("").

    const [isUpperCase, setIsUpperCase] = useState(false); // text is by default in lowercase .


    const toggleCase = () => {
        if (isUpperCase) {
            setState(state.toLowerCase());
            Props.showAlert("The text is converted to lowercase :", "success");
        } else {
            setState(state.toUpperCase());
            Props.showAlert("The text is converted to uppercase :", "success");
        }
        setIsUpperCase(!isUpperCase); // Toggle case state
    };



    const clearText = () => {
        setState('');

        if (clearText) {
            Props.showAlert("nothing to show cleared text :", "success");
        }
    }


    const allSpaceRemoved = () => {

        // let chars = state.split(" ").join("");
        // setState(chars);
        let chars = state.trim().replace(/\s+/g, ' '); // Trim leading/trailing spaces and replace multiple spaces with a single space
        setState(chars);

        if (chars) {
            Props.showAlert("extra spaces removed :", "success");
        }
    }



    // List of fonts to cycle through
    const fonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman', 'Verdana'];

    const [fontFamily, setFontFamily] = useState('Arial'); // Default font-family

    // Function to cycle through fonts on button click
    const changeFontToNext = () => {
        const currentFontIndex = fonts.indexOf(fontFamily); // Get current font index
        const nextFontIndex = (currentFontIndex + 1) % fonts.length; // Get next font index
        setFontFamily(fonts[nextFontIndex]); // Set to next font in the list
    };



    const [sentenceCount, setSentenceCount] = useState(0);

    // Function to count sentences
    const Count = () => {
        // Split the text by sentence-ending punctuation and filter out empty strings
        const count = state.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);

        // Update the state with the number of sentences
        setSentenceCount(count.length);

        if (count) {
            Props.showAlert("count sentences :", "success");
        }
    };



    // const [state, setState] = useState("");

    // Helper function to capitalize the first letter of a word
    const capitalizeFirstLetter = (word) => {
        if (!word) return ''; // Handle empty or null strings
        return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of the word
    };



    // Function to capitalize each word and update the state
    const handleText = (inputText) => {
        if (!inputText || typeof inputText !== 'string') {
            return;
        }
        const capitalized = inputText.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
        setState(capitalized); // Update the state with the capitalized text
    };

    const handleTextChange = (event) => {
        setState(event.target.value);        //update state with user input.
    };



    // const [text, setText] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false); // Track if it's speaking

    // Toggle speech synthesis
    const toggleSpeech = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel(); // Stop speaking
            setIsSpeaking(false); // Update state
        } else {
            const speech = new SpeechSynthesisUtterance(state);
            // Set up the speech object
            speech.onend = () => {
                setIsSpeaking(false); // Automatically update the state when done speaking
            };
            window.speechSynthesis.speak(speech); // Start speaking
            setIsSpeaking(true); // Update state
        };

        if (toggleSpeech) {
            Props.showAlert("wait! reading enabled :", "success");
        }
    };



    // Function to download text as a .txt file
    const downloadTextFile = () => {
        const blob = new Blob([state], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "textfile.txt"; // Specify the default file name
        document.body.appendChild(a); // Append the link to the body
        a.click(); // Simulate a click to trigger the download
        document.body.removeChild(a); // Clean up
        URL.revokeObjectURL(url); // Release the object URL

        if (blob) {
            Props.showAlert("The text is downloading. :", "success");
        }
    };




    // State to hold the current color
    const [color, setColor] = useState("black");

    // Function to change color
    const changeColor = () => {
        const colors = [
            "red", "blue", "green", "yellow", "purple", "orange", "pink",
            "#FF5733", "#33FF57", "#3357FF"
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor); // Update the color state
    };


    const copyText = () => {
        const text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);

        if (text) {
            Props.showAlert("text copied to clipboard. :", "success");
        }
    }



    const [size, setSize] = useState(16);
    const [isIncreasing, setIsIncreasing] = useState(true);

    const toggleFontSize = () => {
        if (isIncreasing) {
            setSize((prevSize) => prevSize + 2);
        }
        else {
            setSize((prevSize) => prevSize - 2);
        }
        setIsIncreasing(!isIncreasing);
    };


    // const [state, setState] = useState(""); // Holds user input

    // const update = (event) => {
    //     setInputText(event.target.value); // Update input text state
    // };



    // const handleTextChange = (e) => {
    //     const inputText = e.target.value;
    //     setState(inputText);  
    // };


    // setState("finally hurray !");

    // const [state, setState] = useState('Enter text here');
    // setState("new state");

    // const [text, setText] = useState('Enter text here2');
    // text="new text"; //Wrong way to use the state
    // setText("new state"); 
    // Correct way to change the state



    //  const [textColor, setTextColor] = useState('black');


    //    const getBrightness = (hexColor) => {
    //     hexColor = hexColor.replace('#', '');
    //     const r = parseInt(hexColor.substr(0, 2), 16);
    //     const g = parseInt(hexColor.substr(2, 2), 16);
    //     const b = parseInt(hexColor.substr(4, 2), 16);
    //     const brightness = r + g + b;
    //     return brightness;
    // };


    //  // Calculate brightness of the selected color
    //  const brightness = getBrightness(Props.setColor);

    //  // Determine text color based on brightness
    // const fontColor = brightness > 400 ? 'black' : 'white';
    // setTextColor(fontColor);



    // const pickerColor = (event)=>{

    // const selectedColor = event.target.value;  // Get the selected color
    //     Props.setColor(${selectedColor});
    //     document.body.style.backgroundColor = selectedColor;


    //     // Calculate brightness of the selected color
    //     // const brightness = Props.getBrightness(selectedColor);

    //     // Determine text color based on brightness
    //     const fontColor = Props.brightness > 400 ? 'black' : 'white';
    //     Props.setTextColor(fontColor);

    // // }

    // const [btnColor,setBtnColor] = useState(" ");

    // setBtnColor(Props.selectedColor);

    // document.getElementById("button").style.backgroundColor = Props.selectedColor;



    // const BackgroundComponent = ({ fontColor }) => {
    // const backgroundColor = Props.fontColor === 'black' ? 'white' : 'black'; // Contrast background color

    // }


    //  Props.textColor=({getBrigthness})=>{
    //     Props.setTextColor(color)
    //  }




    return (
        <>
            <div className="container my-3" style={{ color: Props.mode === "dark" ? 'white' : Props.textColor || 'black', backgroundColor: Props.fontColor }}>
                <h1>{Props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleTextChange} id="mybox" value={state} rows="12" spellCheck={true} lang={"en"} style={{ fontFamily: fontFamily, color: color, fontSize: size + 'px', backgroundColor: Props.mode === "light" ? "white" : "#e6ccb2", borderColor: Props.mode === "light" ? "blue" : "white", caretColor: Props.mode === "dark" ? "white" : "black" }}></textarea>
                    {/* <textarea className="form-control" onChange={handleTextChange} id="mybox" value={state} rows="12" contentEditable="true" spellCheck={true} lang={"en"} style={{ fontFamily: fontFamily, color: color, fontSize: size + 'px', backgroundColor: Props.mode === "light" ? "white" : "grey", color: Props.mode === "light" ? "black" : "white", borderColor: Props.mode === "light" ? "blue" : "white" }}></textarea> */}
                    {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="12"></textarea> */}

                </div>
            </div>

            {/* <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button> */}
            <button className="btn btn-primary my-1 mx-1" onClick={toggleCase}>{isUpperCase ? "Lowercase" : "Uppercase"}</button>
            {/* <button className="btn btn-primary my-2 mx-2" onClick={lowerText}>Convert to Lowercase</button> */}
            <button className="btn btn-primary my-2 mx-2" onClick={clearText}>ClearText</button>
            <button className="btn btn-primary my-2 mx-2" onClick={toggleSpeech}>{isSpeaking ? "StopRead" : "ReadText"}</button>
            <button className="btn btn-primary my-2 mx-2" onClick={Count}>Counts</button>
            <button className="btn btn-primary my-2 mx-2" onClick={allSpaceRemoved}>No-Space</button>
            {/* <button className="ntn btn-primary my-2 mx-2" onClick={filterSentences}>Filter</button> */}
            <button className="btn btn-primary my-2 mx-2" onClick={changeFontToNext}>FontsText</button>
            <button className="btn btn-primary my-2 mx-2" onClick={() => handleText(state)}>capitalFirst </button>
            <button className="btn btn-primary my-2 mx-2" onClick={downloadTextFile}>Download</button>
            <button className="btn btn-primary my-2 mx-2" onClick={changeColor}>ColorText</button>
            {/* <button onClick={handleCheckPalindrome}>{isPalindrome ? "Palindrome: True" : "Palindrome: False"} Check Palindrome</button> */}
            <button className="btn btn-primary my-2 mx-2" onClick={copyText}>CopyAll</button>
            <button className="btn btn-primary my-2 mx-2" onClick={toggleFontSize}>{isIncreasing ? 'Increase' : 'Decrease'}</button>
            <div className='container my-4' style={{ color: Props.mode === "dark" ? 'white' : Props.textColor || 'black' }}>
                <h3>Your text Summery</h3>
                <p>{state.trim() === "" ? 0 : state.trim().split(/\s+/).length} characters and {state.replace(/\s+/g, "").length} words</p>
                <p>{0.008 * state.trim(" ").length} Minutes read</p>
                <p>Number of Sentences: {sentenceCount}</p>
                <h4>Preview</h4>
                <p>{state.length > 0 ? state : "Enter The text To Preview It Here"}</p>
            </div>
        </>

    )


}
