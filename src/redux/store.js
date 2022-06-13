import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { mySaga } from "./findBooksFeature/booksSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
export default store;

// import thunk from "redux-thunk";
// const store = createStore(rootReducer, applyMiddleware(thunk));
