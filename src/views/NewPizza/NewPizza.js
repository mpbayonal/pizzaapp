
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
                                                    <DragDropContainer targetKey="foo" >
                                                        <div>Drag Me!</div>
                                                    </DragDropContainer>

                                                    <DropTarget targetKey="foo" >
                                                        <p>I'm a valid drop target for the object above since we both have the same targetKey!</p>
                                                    </DropTarget>


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
