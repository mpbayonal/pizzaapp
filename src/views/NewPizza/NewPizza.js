
import React , { useState , useEffect } from "react";

import classnames from 'classnames';
import DragCard from '../../components/DragableCard/DragCard';
import ContainerPizza from '../../components/DropContainerPizza/DropContainerPizza';
// reactstrap components


import {

    CardText,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    CardColumns,
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
    const [activeTab2, setActiveTab2] = useState('1');

    const change = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const change2 = tab => {
        if(activeTab2 !== tab) setActiveTab2(tab);
    }



    useEffect(() => {




    }, []);

    const { ingredients } = props.ingredientsList;




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





                                                    <div >
                                                        <Row>
                                                            <Col md="12" xs="12">
                                                                <div className="boxes">
                                                                    <ContainerPizza targetKey="box"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="2" xs="2">



                                                                <Nav pills={true} fill={true} vertical>
                                                                    <NavItem>
                                                                        <NavLink
                                                                            className={classnames({ active: activeTab2 === '1' })}
                                                                            onClick={() =>
                                                                            {
                                                                                change2("1")

                                                                            }}
                                                                        >
                                                                            Salsas
                                                                        </NavLink>
                                                                    </NavItem>
                                                                    <NavItem>
                                                                        <NavLink
                                                                            className={classnames({ active: activeTab2 === '2' })}
                                                                            onClick={() => {

                                                                                change2("2")

                                                                            }}
                                                                        >
                                                                            Quesos
                                                                        </NavLink>
                                                                    </NavItem>
                                                                    <NavItem>
                                                                        <NavLink
                                                                            className={classnames({ active: activeTab2 === '3' })}
                                                                            onClick={() => {

                                                                                change2("3")

                                                                            }}
                                                                        >
                                                                            Carnes
                                                                        </NavLink>
                                                                    </NavItem>

                                                                    <NavItem>
                                                                        <NavLink
                                                                            className={classnames({ active: activeTab2 === '4' })}
                                                                            onClick={() => {

                                                                                change2("4")

                                                                            }}
                                                                        >
                                                                            Frutas y Vegetales
                                                                        </NavLink>
                                                                    </NavItem>

                                                                </Nav>

                                                            </Col>
                                                            <Col md="10" xs="10">
                                                                <TabContent activeTab={activeTab2}>
                                                                    <TabPane tabId="1">
                                                                        <Row>
                                                                            <Col sm="12">
                                                                                <CardColumns>
                                                                                    {console.log(ingredients)}
                                                                                    { props.ingredientsList.map((item) => {
                                                                                        if (item.type === "salsas" && item.status === 0) {
                                                                                            return <DragCard targetKey="box"
                                                                                                             nombre={item.name}
                                                                                                             image = {item.image}
                                                                                                             price = {item.price}
                                                                                            />
                                                                                        }
                                                                                    })
                                                                                    }

                                                                                </CardColumns>

                                                                            </Col>
                                                                        </Row>
                                                                    </TabPane>
                                                                    <TabPane tabId="2">
                                                                        <Row>
                                                                            <Col sm="12">
                                                                                <CardColumns>
                                                                                    {console.log(ingredients)}
                                                                                    { props.ingredientsList.map((item) => {
                                                                                        if (item.type === "quesos" && item.status === 0) {
                                                                                            return <DragCard targetKey="box"
                                                                                                             nombre={item.name}
                                                                                                             image = {item.image}
                                                                                                             price = {item.price}
                                                                                            />
                                                                                        }
                                                                                    })
                                                                                    }

                                                                                </CardColumns>
                                                                            </Col>

                                                                        </Row>
                                                                    </TabPane>

                                                                    <TabPane tabId="3">
                                                                        <Row>
                                                                            <Col sm="12">
                                                                                <CardColumns>
                                                                                    {console.log(ingredients)}
                                                                                    { props.ingredientsList.map((item) => {
                                                                                        if (item.type === "carnes" && item.status === 0) {
                                                                                            return  <DragCard targetKey="box"
                                                                                                                     nombre={item.name}
                                                                                                                     image = {item.image}
                                                                                                                     price = {item.price}
                                                                                            />
                                                                                        }
                                                                                    })
                                                                                    }

                                                                                </CardColumns>
                                                                            </Col>

                                                                        </Row>
                                                                    </TabPane>

                                                                    <TabPane tabId="4">
                                                                        <Row>
                                                                            <Col sm="12">
                                                                                <CardColumns>
                                                                                    {console.log(ingredients)}
                                                                                    { props.ingredientsList.map((item) => {
                                                                                        console.log(item.image)
                                                                                        if (item.type === "ingrediente" && item.status === 0) {
                                                                                            return <DragCard targetKey="box"
                                                                                                             nombre={item.name}
                                                                                                             image = {item.image}
                                                                                                             price = {item.price}
                                                                                            />

                                                                                        }
                                                                                    })
                                                                                    }

                                                                                </CardColumns>
                                                                            </Col>

                                                                        </Row>
                                                                    </TabPane>

                                                                </TabContent>

                                                            </Col>
                                                        </Row>









                                                    </div>








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


