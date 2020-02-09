import React, {Component} from "react";
import TableView from "../../components/Table/Table";

import "./ViewList.css";
import {connect} from "react-redux";
import * as actions from "../../store/Actions/ExpenseAction";

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
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <button>Delete</button>
             </span>
        ),
    }
];

class ViewList extends Component{
    state = {
        columns: columns,
        data: []
    };

    componentDidMount(): void {
        this.props.onComponentLoad();
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
      onComponentLoad: () => dispatch(actions.fetchExpense())
  }
};

export default connect(mapPropsToState, mapPropsToDispatch) (ViewList);