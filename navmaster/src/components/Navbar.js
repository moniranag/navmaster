import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(Props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}>

                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{Props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{Props.aboutText}</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" style={{color: Props.mode==="light" ? "black" : "white"}}>Search</button>
                        </form>
                    </div>

                </div>


                <div className={`form-check form-switch text-${Props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={Props.toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
                </div>

            </nav>


            {/* <div className="container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, neque aperiam voluptas eius ad dolore inventore cum libero nihil similique! Amet velit natus at, iusto nam sequi sed perspiciatis numquam!
            </div> */}

        </div>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Navbar.defaultProps = {
//     title: "stranger 2",
//     aboutText: "about 1"
// }





















