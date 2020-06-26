
import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";


import pizzaRoutes from "./routes";

var ps;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "black",
            activeColor: "info",
        };
        this.mainPanel = React.createRef();
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.mainPanel.current);
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            this.mainPanel.current.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Sidebar
                    {...this.props}
                    routes={pizzaRoutes}
                    bgColor={this.state.backgroundColor}
                    activeColor={this.state.activeColor}
                />
                <div className="main-panel" ref={this.mainPanel}>

                    <Switch>
                        {pizzaRoutes.map((prop, key) => {
                            return (
                                <Route
                                    path={prop.startPath + prop.endPath}
                                    component={prop.component}
                                    key={key}
                                />
                            );
                        })}
                    </Switch>

                </div>

            </div>
        );
    }
}

export default Home;
