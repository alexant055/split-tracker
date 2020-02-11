import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import expense from "./ExpenseReducer";
import member from "./MemberReducer";

const rootReducer = combineReducers({
    expense,
    member,
    routing: routerReducer
});

export default rootReducer;