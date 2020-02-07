import React, {Component} from "react";

import "./MemeberList.css";
import Member from "../../components/Member/Member";

class MemberList extends Component{

    state ={
        members:{
            name: ['Alexander', 'Christina', 'Ankur', 'Shivanya', 'Bharath', 'Tony', 'Janani', 'Jona', 'Praveen']
        }
    };

    render() {
        return (
            <div className="MemberList">
                {this.state.members.name.map(name =>(
                    <Member name={name} key={name}/>
                    )
                 )
                }
            </div>
        );
    }
}

export default MemberList;
