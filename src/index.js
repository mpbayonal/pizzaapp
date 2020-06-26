import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.css';
import "perfect-scrollbar/css/perfect-scrollbar.css";
import AdminLayout from "./start";



const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/home" render={(props) => <AdminLayout {...props} />} />
            <Redirect to="/home/newPizza" />
        </Switch>
    </Router>,
    document.getElementById("root")
);
