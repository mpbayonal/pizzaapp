import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./start";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect to="/admin/dashboard" />
        </Switch>
    </Router>,
    document.getElementById("root")
);
