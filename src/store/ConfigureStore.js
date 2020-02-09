import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

function configureStoreProd(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(thunk))
    );
    return store;
}

function configureStoreDev(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

const configureStore =
    process.env.NODE_ENV === "production"
        ? configureStoreProd
        : configureStoreDev;

export default configureStore;