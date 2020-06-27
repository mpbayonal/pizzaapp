import React from 'react';
import DragCard from '../DragableCard/DragCard';
import classnames from 'classnames';
import ContainerPizza from '../DropContainerPizza/DropContainerPizza';
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



export default class IngredientsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab2: '1', listIngredients: this.props.lista

        };
    }

    render() {
        return (
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
                            className={classnames({ active: this.state.activeTab2 === '1' })}
                            onClick={() =>
                            {
                                if(this.state.activeTab2 !== '1')
                                {
                                    this.setState({ activeTab2: '1' })
                                }

                            }}
                        >
                            Carnes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab2 === '2' })}
                            onClick={() => {

                                if(this.state.activeTab2 !== '2')
                                {
                                    this.setState({ activeTab2: '2' })
                                }

                            }}
                        >
                            Quesos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab2 === '3' })}
                            onClick={() => {

                                if(this.state.activeTab2 !== '3')
                                {
                                    this.setState({ activeTab2: '3' })
                                }

                            }}
                        >
                            Otros Ingredientes
                        </NavLink>
                    </NavItem>
                </Nav>

                    </Col>
                    <Col md="10" xs="10">
                <TabContent activeTab={this.state.activeTab2}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">


                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>


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

                    <TabPane tabId="3">
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

                    </Col>
                </Row>



                <div className="things_to_drag">
                    <DragCard targetKey="box" label="bananas"  text="img/banana.png"/>
                    <DragCard targetKey="box" label="cheeseburger"  text="img/surprise.png"/>

                </div>





            </div>
        )
    }
}
