import React from 'react';

import {  DropTarget } from 'react-drag-drop-container';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle,
    Col,
    Row,
    TabPane,
    CardGroup,
    CardImg,
    CardImgOverlay,
    CardColumns, Form
} from "reactstrap";


export default class ContainerPizza extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    handleDrop = (e) => {
        let items = this.state.items.slice();
        items.push({label: e.dragData.label, uid: "ff"});
        this.setState({items: items});
        e.containerElem.style.visibility="hidden";
    };

    swap = (fromIndex, toIndex, dragData) => {
        let items = this.state.items.slice();
        const item = {label: dragData.label, uid: "ff"};
        items.splice(toIndex, 0, item);
        this.setState({items: items});
    };

    kill = (uid) => {
        let items = this.state.items.slice();
        const index = items.findIndex((item) => {
            return item.uid == uid
        });
        if (index !== -1) {
            items.splice(index, 1);
        }
        this.setState({items: items});
    };

    render() {
        /*
            Note the two layers of DropTarget.
            This enables it to handle dropped items from
            outside AND items dragged between boxes.
        */
        return (
            <div className="component_box">
                <DropTarget
                    onHit={this.handleDrop}
                    targetKey={this.props.targetKey}
                    dropData={{name: this.props.name}}
                >


                        <div className="box">
                            <Row>
                                <Col sm="12">
                                    <Card  >
                                        <CardImg width="100%" src={require("files/img/pizzaHome2.png")} alt="Card image cap" />
                                        <CardImgOverlay>

                                            <div>
                                                <Row>
                                                    <Col md="6" xs="0">
                                                    </Col>
                                                    <Col md="6" xs="12">
                                                        <Card className="card-plain">
                                                            <Row>
                                                                <Col className="ml-auto mr-auto text-center" md="6">
                                                                    <CardTitle tag="h5">Mi Pizza</CardTitle>

                                                                </Col>
                                                            </Row>
                                                            <CardGroup>
                                            {this.state.items.map((item, index) => {
                                return (




                                    <div>


                                        <Row>
                                            <Col md="12" xs="12">
                                                <Row>
                                                    <Col md="11" xs="11">
                                    <p>{item.label}<Button close />  </p>
                                                    </Col>
                                                    <Col md="1" xs="1">

                                                    </Col>
                                                </Row>

                                            </Col>
                                        </Row>
                                    </div>



                                )
                            })}</CardGroup>
                                                            <Row>
                                                                <Col className="ml-auto mr-auto text-center" md="6">
                                                                    <CardTitle tag="h6">Total: $40994</CardTitle>

                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <div className="update ml-auto mr-auto">
                                                                    <Button
                                                                        className="btn-round"
                                                                        color="danger"
                                                                        type="submit"
                                                                    >
                                                                        Siguiente
                                                                    </Button>
                                                                </div>
                                                            </Row>
                                                        </Card>
                                            </Col>
                                        </Row>


                                            </div>
                                        </CardImgOverlay>
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                </DropTarget>
            </div>
        );
    }
}
