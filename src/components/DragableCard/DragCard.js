import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';
import {Button, Card, CardText, CardTitle,Row,
    Col} from "reactstrap";
import PropTypes from "prop-types";


/*
    Boxable -- a thing you can drag into a Box
*/

function DragCard(props) {

    let imageRoute;


     const logo = require('../../files/img/' + props.image);

        return(
            <div className="boxable_component" style={{display: 'inline-block'}}>
                <DragDropContainer
                    targetKey={props.targetKey}
                    dragData={{label: props.nombre}}
                    customDragElement={props.customDragElement}
                    onDragStart={()=>(console.log('start'))}
                    onDrag={()=>(console.log('dragging'))}
                    onDragEnd={()=>(console.log('end'))}
                    onDrop={(e)=>(props.changeState(props.nombre))}

                >

                    <Card body>

                        <div className="image">
                            <img
                                alt="..."
                                src={logo}
                                width={224}
                                height={224}
                            />
                        </div>
                        {console.log(imageRoute)}
                        <CardTitle tag="p">{props.nombre}</CardTitle>
                        <p className="card-category">{"$" + props.price}</p>



                        <Row>
                            <Col md="12" xs="12">
                                <Button
                                    className="btn-round"
                                    color="danger"
                                    type="submit"
                                > Agregar </Button>
                            </Col>
                        </Row>

                    </Card>

                </DragDropContainer>
            </div>
        );



 }
DragCard.propTypes = {

        price: PropTypes.number,
        image: PropTypes.string,
        nombre: PropTypes.string,


        changeState:PropTypes.func
};
export default DragCard
