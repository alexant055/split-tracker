import React from "react";

import "./Member.css";

const Member = (props) =>{
    return (
      <div className="Member">
          <span className="Name">{props.name}</span>
      </div>
    );
};

export default Member;
