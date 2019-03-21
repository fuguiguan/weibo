import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';


let loggerMiddleware = createLogger();
let store = createStore(
    rootReducer,
    applyMiddleware(
        ThunkMiddleware,
        loggerMiddleware
    )
    );

export default store;
