import React, { useState } from 'react'

export default function About() {

    // let visible =
    // const [visible, setvisible] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [mode, setMode] = useState("Enable Dark Mode");

    // const togglebtn = () => {
    //     if (visible.color === 'black') {
    //         setvisible({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setMode("Enable Light Mode");
    //     }
    //     else {
    //         setvisible({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setMode("Enable Dark Mode");
    //     }
    // }

    // const [state,setState] = useState (0);

    const [visible, setVisible] = useState({   // by default visibility
        color: 'black',
        backgroundColor: 'white'
    })

    const [btn, setBtn] = useState("Enable Dark Mode");


    // toggle black to white  or white to black  : - if-else (condition use)

    const togglevis = () => {
        if (visible.color === "black") {
            setVisible({
                color: 'white',
                backgroundColor: '#828385'
            })
            setBtn("Enable Light Mode");
        }
        else {
            setVisible({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtn("Enable Dark Mode");
        }
    }


    let heading = {
        color: '#d8f98f',
        backgroundColor: '#565656'
    };

    return (
        <div>
            <div className="accordion my-5" id="accordionExample">
                <div className="accordion-item" style={visible}>
                    <h1 className="my-3 mx-3">About Us</h1>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={heading} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={visible}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={heading} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={visible}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={heading} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button type="button" className="btn btn-primary" onClick={togglevis}>{btn}</button>
            </div>
        </div>
    )
}


