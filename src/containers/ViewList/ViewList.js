import React, {Component} from "react";
import TableView from "../../components/Table/Table";

import "./ViewList.css";
import axios from "axios";

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
        const dataSource = [];
        axios.get("https://split-tracker-5c9f0.firebaseio.com/expense.json")
            .then(resp => {
                for(let key in resp.data) {
                    const data = {};
                    const row = resp.data[key];
                    data.key = key;
                    for(let index in row){
                        data[index] = row[index];
                    }
                    dataSource.push(data);
                }
                this.setState({data: dataSource});
            })
            .catch(error => console.log(error));
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps)
        console.log(prevState)
    }

    render() {
        return(
            <div className="ViewList">
                <TableView
                    size={"10"}
                    column={this.state.columns}
                    data={this.state.data}/>
            </div>
        );
    }
}

export default ViewList;