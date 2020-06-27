import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';
import {Button, Card, CardText, CardTitle} from "reactstrap";
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
                    onDrop={(e)=>(console.log(e))}

                >

                    <Card body>
                        {props.nombre}

                        {console.log(imageRoute)}
                        <CardTitle>{"$" + props.price}</CardTitle>
                        <img src={logo}  alt="" />


                        <Button>Añadir</Button>
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
