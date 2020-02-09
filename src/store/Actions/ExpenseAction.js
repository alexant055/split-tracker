import axios from "axios";
import * as types from "./ActionTypes";
import {API_URL} from "../../globals/Global";

const addExpenseSuccess = (resp) => {
    return {
        type: types.ADD_EXPENSE
    };
};

const addExpenseFail = (error) => {
    return {
        type: types.ADD_EXPENSE_FAIL,
        error: error
    };
};

export const addExpense = (expenseData) => {
    return (dispatch => {
        axios.post(API_URL + "/expense.json", expenseData)
            .then(resp => {dispatch(addExpenseSuccess(resp)); dispatch(fetchExpense()); })
            .catch(error => dispatch(addExpenseFail(error)));
    });
};

const fetchExpenseSuccess = (dataSource) => {
    return {
        type: types.GET_EXPENSES,
        data: dataSource
    };
}

const fetchExpenseFail = (error) => {
    return {
        type: types.GET_EXPENSES_FAIL,
        error: error
    };
};

export const fetchExpense = () => {
    return (dispatch => {
        const dataSource = [];
        axios.get(API_URL + "/expense.json")
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
                dispatch(fetchExpenseSuccess(dataSource))
            })
            .catch(error => dispatch(fetchExpenseFail(error)));
    });
};

const deleteExpenseSuccess = (key) => {
    return {
        type: types.DELETE_EXPENSE,
        key: key
    }
};

const deleteExpenseFail = () => {
    return {
        type: types.DELETE_EXPENSE_FAIL
    }
};

export const deleteExpense = (key) => {
    const expenseObj = "/expense/" + key + ".json";
    return (dispatch => {
        axios.delete(API_URL + expenseObj)
            .then(r => {
                if(r.status === 200)
                    dispatch(deleteExpenseSuccess(key));
                else
                    dispatch(deleteExpenseFail())
            })
            .catch(error => dispatch(deleteExpenseFail()))
        }
    );
};