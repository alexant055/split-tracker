import React from "react";
import {Icon} from "antd";
import "./Member.css";

const Member = (props) =>{
    return (
      <div className="Member">
          <span className="Name">{props.name}</span>
          <Icon type="close-circle" theme="filled" className="Icon" onClick={props.removeClicked}/>
      </div>
    );
};

export default Member;
