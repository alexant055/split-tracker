import * as  types from "../Actions/ActionTypes";

const initialState = {
    expenseData: [],
    error: "",
    added: false
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const addExpense = (state, action) => {
    return updateObject(state, {added: true});
};

const getExpense = (state, action) => {
    return updateObject(state, {expenseData: action.data, added: true});
};

const addExpenseFail = (state) => {
    return updateObject(state, {added: false});
};

const getExpenseFail = (state) => {
    return updateObject(state, {added: false});
};

const ExpenseReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_EXPENSE: return addExpense(state, action);
        case types.GET_EXPENSES: return getExpense(state, action);
        case types.ADD_EXPENSE_FAIL: return addExpenseFail(state);
        case types.GET_EXPENSES_FAIL: return getExpenseFail(state);
        default: return state;
    }
};

export default ExpenseReducer;