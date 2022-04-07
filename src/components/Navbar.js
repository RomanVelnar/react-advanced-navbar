import React from "react";
import './Navbar.css';


export default function Navbar(props) {
    return(
        <nav>
            {/* <a><img src={logo} alt="logo" /></a>     */}
            <ul className="navbar-nav">
                { props.children }
            </ul>
        </nav>
    )
} 