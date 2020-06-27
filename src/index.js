import React from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux'

import mainReducer from './redux/reducers/mainReducer';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.css';
import "perfect-scrollbar/css/perfect-scrollbar.css";
import AdminLayout from "./start";

const initialState = { reservasList: {reservas: [], error:null, loading: false},
    newReserva:{reserva:null, error: null, loading: false},
    activeReserva:{reserva:null, error:null, loading: false},
    deletedReserva: {reserva: null, error:null, loading: false},
};

const hist = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
export function configureStore(initialState ) {
    const store = createStore(
        combineReducers({
            mainReducer,
            routing: routerReducer
        }),
        applyMiddleware(sagaMiddleware, logger, routerMiddleware(hist),thunk),
    );
    return store;
}

const store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
    <Router history={hist}>
        <Switch>
            <Route path="/home" render={(props) => <AdminLayout {...props} />} />
            <Redirect to="/home/newPizza" />
        </Switch>
    </Router>
    </Provider> ,
    document.getElementById("root")
);
