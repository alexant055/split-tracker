import React, {Component} from 'react';
import './App.css';

/* Containers */
import ExpenseForm from "../ExpenseForm/ExpenseForm";

/* Components */
import Header from "../../components/Header/Header";
import MemberList from "../MemberList/MemberList";

class App extends Component {
    state ={
        name: "Split Tracker"
    };

  render() {
    return (
        <div className="App">
            <Header name={this.state.name}/>
            <div className="AppBody">
                <MemberList/>
                <ExpenseForm/>
            </div>
        </div>
    );
  }
}

export default App;
