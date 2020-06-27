
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
    FormGroup,
    Form,
    Input,
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


                                                    <CardTitle tag="h5">Arma tu pizza:</CardTitle>

                                                    <div >
                                                        <Row>
                                                            <Col md="12" xs="12">
                                                                <div className="boxes">
                                                                    <ContainerPizza targetKey="box"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="12" xs="12">
                                                                <CardTitle tag="h5">Ingredientes:</CardTitle>
                                                            </Col>
                                                        </Row>
                                                        <Row>

                                                            <Col md="1" xs="1">



                                                                <Nav pills={true} fill={true} vertical >
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
                                                            <Col md="1" xs="1">
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
                                                <Col sm="12">
                                                    <Card body>
                                                        <CardTitle tag="h5">Añadir la información del usuario:</CardTitle>
                                                        <Form>

                                                            <Row>
                                                                <Col className="pr-1" md="6">
                                                                    <FormGroup>
                                                                        <label>Nombre</label>
                                                                        <Input
                                                                            defaultValue="nombre"
                                                                            placeholder="nombre"
                                                                            type="text"
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                                <Col className="pl-1" md="6">
                                                                    <FormGroup>
                                                                        <label>Apellido</label>
                                                                        <Input
                                                                            defaultValue="apellido"
                                                                            placeholder="apellido"
                                                                            type="text"
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="12">
                                                                    <FormGroup>
                                                                        <label>Dirección</label>
                                                                        <Input
                                                                            defaultValue="Cra 78 # 89-20"
                                                                            placeholder="direccion"
                                                                            type="text"
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col className="pr-1" md="6">
                                                                    <FormGroup>
                                                                        <label>Fecha</label>
                                                                        <Input

                                                                            placeholder="fecha"
                                                                            type="date"
                                                                        />
                                                                    </FormGroup>
                                                                </Col>

                                                                <Col className="pl-1" md="6">
                                                                    <FormGroup>
                                                                        <label>Telefono</label>
                                                                        <Input placeholder="telefono" type="number" />
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <div className="update ml-auto mr-auto">
                                                                    <Button
                                                                        className="btn-round"
                                                                        color="danger"
                                                                        type="submit"
                                                                    >
                                                                        Crear Pizza
                                                                    </Button>
                                                                </div>
                                                            </Row>
                                                        </Form>
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


