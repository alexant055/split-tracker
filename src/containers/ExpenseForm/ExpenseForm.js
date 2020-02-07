import React, {Component} from "react";

import "./ExpenseForm.css";

/* Component */
import Input from "../../components/Input/Input";

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
        console.log(id, event.target.value)

        const  updatedForm = { ...this.state.form};
        const updatedElement = { ...updatedForm[id]};

        updatedElement.value = event.target.value;
        updatedElement.touched = true;
        updatedElement.valid = this.formElementValidation(event.target.value, updatedElement.elementConfig.type);

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

    formElementValidation = (value, type) =>
    {
        console.log(value, type)
        if(type === "number")
            return value > 0;
        else
            return value !== '';
    }

    render() {

        let formElement = [];
        for(let key in this.state.form) {
            formElement.push({
               id: key,
               config: this.state.form[key]
            });
        }

        let form =  <form>
            {formElement.map(element => (
                <Input
                    key = {element.id}
                    type={element.config.elementConfig.type}
                    name={element.config.elementConfig.name}
                    touched={element.config.touched}
                    value={element.config.value}
                    onInputChange={(event) => this.inputChangeHandler(event, element.id)}
                />))}
            <button className="FormButton" disabled={!this.state.formIsValid}>ADD</button>
        </form>;

        return(
            <div className="Form">
                {form}
            </div>
        );
    }
};

export default ExpenseForm;
