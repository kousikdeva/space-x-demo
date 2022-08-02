import { applyMiddleware, legacy_createStore as createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"
import middleware from "./middleware"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = createSagaMiddleware()
let enhancer;

if (process.env.NODE_ENV === "development") {
    enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
} else {
    enhancer = applyMiddleware(sagaMiddleware);
}

export default createStore(reducer, enhancer)

sagaMiddleware.run(middleware)