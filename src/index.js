import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux'

import mainReducer from './redux/reducers/mainReducer';


import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import AdminLayout from "./Admin";



const hist = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
export function configureStore( ) {
    const store = createStore(
        combineReducers({
            mainReducer,
            routing: routerReducer
        }),
        applyMiddleware(sagaMiddleware, logger, routerMiddleware(hist),thunk),
    );
    return store;
}

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
    <Router history={hist}>
        <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect to="/admin/newPizza" />
        </Switch>
    </Router>
    </Provider> ,
    document.getElementById("root")
);
