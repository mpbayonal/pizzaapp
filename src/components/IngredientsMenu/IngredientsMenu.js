import React from 'react';
import DragCard from '../DragableCard/DragCard';
import ContainerPizza from '../DropContainerPizza/DropContainerPizza';




export default class IngredientsMenu extends React.Component {
    render() {
        return (
            <div className="drag_things_to_boxes">
                <div className="boxes">
                    <ContainerPizza targetKey="box"/>

                </div>
                <h2>Demo: Drag things Into and Between Boxes</h2>
                You can also drag to re-order within boxes. Note &#8759; used as drag handles.
                <div className="things_to_drag">
                    <DragCard targetKey="box" label="bananas"  text="img/banana.png"/>
                    <DragCard targetKey="box" label="cheeseburger"  text="img/surprise.png"/>

                </div>

                <div style={{clear: 'both'}}>&nbsp;</div>

                <h3>Notes:</h3>
                When you drag an item into a box, the Box element gets info from the onHit event's dragData property
                and uses it to construct a BoxItem. You can then drag BoxItems between boxes using drag handles.
                <ul>
                    <li><strong>dragHandleClassName</strong> specify that you can only drag a box by grabbing the 'x'.</li>
                    <li><strong>disappearDraggedElement</strong> makes the elements in the boxes disappear when you drag them, so they no longer take up any space.</li>
                </ul>

            </div>
        )
    }
}
