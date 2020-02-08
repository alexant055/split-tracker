import React from "react";

import "./Input.css";

const InputComponent = (props) => {
    return (
        <div className="InputComponent">
            <label className="Label">{props.name}</label>
            <input className="InputField" type={props.type} onChange={props.onInputChange}/>
        </div>
    );
};

export default InputComponent;
