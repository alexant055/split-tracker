import React from "react";

import "./Header.css"

import Logo from "./../../assets/Logo-Finance.jpg"

const Header = (props) => {
    return(
        <div className="Header">
            <img src={Logo} alt={props.name} className="Logo"/>
            <span className="Name">{props.name}</span>
        </div>
    );
};

export default Header;
