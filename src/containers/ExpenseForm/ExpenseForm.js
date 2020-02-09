import React, {Component} from "react";

import "./ExpenseForm.css";

/* Component */
import InputComponent from "../../components/Input/Input";

import {members} from "../../globals/Global";
import {connect} from "react-redux";
import * as expenses from "../../store/Actions/ExpenseAction";
import MemberList from "../MemberList/MemberList";

class ExpenseForm extends Component{

    state = {
        form: {
            WhoPaid: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'Who Paid'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            ToWhom: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'To Whom'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Amount: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    name: 'Amount'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            When: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    name: 'When'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Desc: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'Description'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    };

    inputChangeHandler = (event, id) => {

        const  updatedForm = { ...this.state.form};
        const updatedElement = { ...updatedForm[id]};

        updatedElement.value = event.target.value;
        updatedElement.touched = true;
        updatedElement.valid = this.formElementValidation(id, event.target.value, updatedElement.elementConfig.type);

        updatedForm[id] = updatedElement;

        let isFormValid = true;
        for(let identifier in updatedForm) {
            isFormValid = updatedForm[identifier].valid && isFormValid;
        }

        this.setState({
            form: updatedForm,
            formIsValid: isFormValid
        });
    };

    formElementValidation = (id, value, type) => {
        if(id === 'WhoPaid' || id === 'ToWhom')
            return members.filter(mem => mem.toLocaleLowerCase() === value.toString().toLocaleLowerCase()).length > 0;

        if(type === "number")
            return value > 0;
        else
            return value !== '';
    };

    addExpense = (event) => {
        event.preventDefault();

        let expenseData = {};
        for(let key in this.state.form) {
            expenseData[key] = this.state.form[key].value
        }
        this.props.addExpenseAction(expenseData);
    };

    render() {

        let formElement = [];
        for(let key in this.state.form) {
            formElement.push({
               id: key,
               config: this.state.form[key]
            });
        }

        let form =  <form>
            <div className="Title">Add Expense</div>
            {formElement.map(element => (
                <InputComponent
                    key = {element.id}
                    type={element.config.elementConfig.type}
                    name={element.config.elementConfig.name}
                    touched={element.config.touched}
                    value={element.config.value}
                    onInputChange={(event) => this.inputChangeHandler(event, element.id)}
                />))}
            <button
                className="FormButton"
                disabled={!this.state.formIsValid}
                onClick={this.addExpense}
            >ADD</button>
        </form>;


        return(
            <div className="Form">
                <MemberList/>
                {form}
            </div>
        );
    }
};

const mapPropsToDispatch = dispatch => {
    return {
        addExpenseAction: (expense) => dispatch(expenses.addExpense(expense))
    }
};

export default connect(null, mapPropsToDispatch)(ExpenseForm);
