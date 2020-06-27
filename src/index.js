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

const initialState = { pizzaList: {pizzas: [], error:null, loading: false},
    newPizza:{pizza:null, error: null, loading: false},
    activePizza:{pizza:null, error:null, loading: false},
    deletedPizza: {pizza: null, error:null, loading: false},
    ingredientsList: {ingredients: [
            {
                "name": "Aceitunas",
                "image": "files/data/aceitunas.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Cebolla",
                "image": "files/data/cebolla.jpg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Cereza",
                "image": "files/data/cereza.jpg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Cereza",
                "image": "files/data/cereza.jpg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Champiñones",
                "image": "files/data/champinones.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Ciruelas",
                "image": "files/data/ciruela.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Jalapeños",
                "image": "files/data/jalapenos.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Maiz",
                "image": "files/data/maiz.jpg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Pepinillos",
                "image": "files/data/pepinillos.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Pimenton",
                "image": "files/data/pimenton.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Piña",
                "image": "files/data/pina.jpeg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Queso Americano",
                "image": "files/data/americano.jpg",
                "price": 3000,
                "type": "quesos",
                "status": 0
            },
            {
                "name": "Mozzarella",
                "image": "files/data/mozzarella.jpg",
                "price": 3000,
                "type": "quesos",
                "status": 0
            },
            {
                "name": "Queso Azul",
                "image": "files/data/quesoAzul.png",
                "price": 3000,
                "type": "quesos",
                "status": 0
            },
            {
                "name": "Salsa de Tomate",
                "image": "files/data/salasatomate.png",
                "price": 3000,
                "type": "salsas",
                "status": 0
            },
            {
                "name": "Salsa BBQ",
                "image": "files/data/salsabbq.png",
                "price": 3000,
                "type": "salsas",
                "status": 0
            },
            {
                "name": "Salsa Marinara",
                "image": "files/data/salsamarinara.jpg",
                "price": 3000,
                "type": "salsas",
                "status": 0
            },
            {
                "name": "Tocineta",
                "image": "files/data/tocineta.png",
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Carne",
                "image": "files/data/carne.png",
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Chorizo",
                "image": "files/data/chorizo.jpg",
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Jamon",
                "image": "files/data/jamon.png",
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Pollo",
                "image": "files/data/pollo.jpg",
                "price": 5000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Peperoni",
                "image": "files/data/peperoni.jpg",
                "price": 4500,
                "type": "carnes",
                "status": 0
            }
        ], error:null, loading: false},
};

const hist = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
export function configureStore(initialState ) {
    const store = createStore(
        combineReducers({
            mainReducer,
            routing: routerReducer
        }),
        applyMiddleware(sagaMiddleware, logger, routerMiddleware(hist),thunk), require
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
