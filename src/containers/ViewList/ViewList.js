import React, {Component} from "react";
import TableView from "../../components/Table/Table";

import "./ViewList.css";
import {connect} from "react-redux";
import * as actions from "../../store/Actions/ExpenseAction";
import {Icon} from "antd";

const columns = [
    {
        title: 'Date',
        key: 'When',
        dataIndex: 'When'
    },
    {
        title: 'Who Paid',
        key: 'WhoPaid',
        dataIndex: 'WhoPaid'
    },
    {
        title: 'To Whom',
        key: 'ToWhom',
        dataIndex: 'ToWhom'
    },
    {
        title: 'Amount',
        key: 'Amount',
        dataIndex: 'Amount'
    },
    {
        title: 'Description',
        key: 'Desc',
        dataIndex: 'Desc'
    }
];

class ViewList extends Component{
    state = {
        columns: columns,
        data: []
    };

    clicked = (key, event) => {
        if(event.currentTarget.id === "Del-Exp")
            this.props.onDeleteExpense(key);
    };

    componentDidMount(): void {
        this.props.onComponentLoad();

        let action = {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Icon
                        id="Edit-Exp"
                        onClick={(event: HTMLElement) => this.clicked(record.key, event)}
                        type="edit"
                        theme="filled"
                        style={{ color: "#3F8ED3" }} className="Icon"/>
                    <Icon
                        id="Del-Exp"
                        onClick={(event:HTMLElement) => this.clicked(record.key, event)}
                        type="delete" theme="filled"
                        style={{ color: '#ED1C24' }} className="Icon"/>
                </div>
            )
        }

        this.state.columns.push(action);
    }

    render() {
        return(
            <div className="ViewList">
                <TableView
                    size={"small"}
                    column={this.state.columns}
                    data={this.props.data}/>
            </div>
        );
    }
}

const mapPropsToState = state => {
    return {
        data: state.expense.expenseData
    }
};

const mapPropsToDispatch = dispatch => {
  return {
      onComponentLoad: () => dispatch(actions.fetchExpense()),
      onDeleteExpense: (key) => dispatch(actions.deleteExpense(key))
  }
};

export default connect(mapPropsToState, mapPropsToDispatch) (ViewList);