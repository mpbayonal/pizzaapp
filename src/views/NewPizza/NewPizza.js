
import React , { useState } from "react";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import classnames from 'classnames';
import IngredientsMenu from '../../components/IngredientsMenu/IngredientsMenu';
// reactstrap components


import {
    TabContent,
    CardText,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

class NewPizza extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',

        };
    }

    getInitialState() {
        return {
            concerts: []
        }
    }

    componentDidMount() {
        var th = this;
        this.serverRequest =
            axios.get(this.props.source)
                .then(function(result) {
                    th.setState({
                        concerts: result.data.concerts
                    });
                })
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>

                        <Col md="12">
                            <Card className="card-user">

                                <CardBody>


                                    <Nav pills={true} fill={true}>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '1' })}
                                                onClick={() =>
                                                {
                                                    if(this.state.activeTab !== '1')
                                                    {
                                                        this.setState({ activeTab: '1' })
                                                    }

                                                    }}
                                            >
                                                Ingredientes
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '2' })}
                                                onClick={() => {

                                                    if(this.state.activeTab !== '2')
                                                    {
                                                        this.setState({ activeTab: '2' })
                                                    }

                                                }}
                                            >
                                                Informacion del Pedido
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">

                                                    <IngredientsMenu />



                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="6">
                                                    <Card body>
                                                        <CardTitle>Special Title Treatment</CardTitle>
                                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                        <Button>Go somewhere</Button>
                                                    </Card>
                                                </Col>
                                                <Col sm="6">
                                                    <Card body>
                                                        <CardTitle>Special Title Treatment</CardTitle>
                                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                        <Button>Go somewhere</Button>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>


                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default NewPizza;
