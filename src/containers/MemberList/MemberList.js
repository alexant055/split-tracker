import React, {Component} from "react";

import "./MemeberList.css";
import * as actions from "./../../store/Actions/MemberAction";
import {connect} from "react-redux";
import {Icon, Input, Modal} from "antd";
import Member from "../../components/Member/Member";

class MemberList extends Component{

    state ={
        isModalOpen: false,
        member: ""
    };

    constructor(props) {
        super(props);
        this.props.onComponentLoad();
    }

    changeHandler = (event) => {
        this.setState({member: event.target.value})
    };

    addMember = () => {
        this.props.onAddMember({name: this.state.member});
        this.setState({isModalOpen: false});
    };

    removeMember = (key) => {
        this.props.onRemoveMember(key)
    };

    openModal = () => {
        this.setState({isModalOpen: true})
    };

    handleCancel = () => {
        this.setState({isModalOpen: false});
    };

    render() {

        let modal = null;

        if(this.state.isModalOpen)
            modal = (
                <Modal visible
                       closable={false}
                       title={"ADD MEMBER"}
                       onOk={this.addMember}
                       onCancel={this.handleCancel}>
                    <Input placeholder="Enter Name" onChange={this.changeHandler}></Input>
                </Modal>
            );

        return (
        <div className="MemberList">
            <div className="Title">
                <strong>Members</strong>
            </div>
            <div className="Action" onClick={this.openModal}>
                <Icon type="plus-square" theme="filled" className="Icon"/>
                Member
            </div>
            {modal}

            {this.props.members.length > 0 && this.props.members
                .map(mem =>
                    <Member name={mem.name}
                            key={mem.key}
                            removeClicked={() => this.removeMember(mem.key)}/>)}
        </div>);
    }
}

const mapPropsToState = state => {
    return {
        members: state.member.members
    }
};

const mapPropsToDispatch = dispatch => {
    return {
        onComponentLoad: () => dispatch(actions.fetchMembers()),
        onAddMember: (member) => dispatch(actions.addMember(member)),
        onRemoveMember: (memberKey) => dispatch(actions.removeMember(memberKey))
    }
};

export default connect(mapPropsToState, mapPropsToDispatch) (MemberList);
