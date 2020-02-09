import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';

/* Containers */
import ExpenseForm from "../ExpenseForm/ExpenseForm";

/* Components */
import Header from "../../components/Header/Header";
import ViewList from "../ViewList/ViewList";

class App extends Component {
    state ={
        name: "Split Tracker"
    };

  render() {
    return (
        <div className="App">
            <Header name={this.state.name}/>
            <div className="AppBody">
                <ExpenseForm/>
                <ViewList/>
            </div>
        </div>
    );
  }
}

export default App;
