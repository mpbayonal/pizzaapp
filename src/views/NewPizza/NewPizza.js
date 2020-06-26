
import React , { useState } from "react";
import classnames from 'classnames';
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
            date: new Date(),
            
        };
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>

                        <Col md="12">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">Arma tu pizza!!</CardTitle>
                                </CardHeader>
                                <CardBody>


                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                Tab1
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                                More Tabs
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <h4>Tab 1 Contents</h4>
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
