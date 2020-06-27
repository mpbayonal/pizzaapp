
import React , { useState , useEffect } from "react";

import classnames from 'classnames';
import IngredientsMenu from '../../components/IngredientsMenu/IngredientsMenu';
// reactstrap components


import {

    CardText,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    TabContent,
    CardBody,
    Button,
    CardTitle,

    Row,
    Col,
} from "reactstrap";

export default function NewPizza(props) {


    const [activeTab, setActiveTab] = useState('1');

    const change = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    let ingredientsList = []

    useEffect(() => {




    }, []);

    const { ingredients, loading, error } = props.ingredientsList;




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
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() =>
                                                {
                                                    change('1');

                                                    }}
                                            >
                                                Ingredientes
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => {

                                                    change('2');

                                                }}
                                            >
                                                Informacion del Pedido
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab}>
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


