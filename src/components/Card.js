import React from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';

const Card = (props) => {

    const identifier = props.title==="Done" ? "done" : props.title==="To Do" ? "todo" : "inprogress";

    const handleStop = (task,fromWhere, ui) => {
        console.log(task,fromWhere, ui.lastX)
    }

    return (
        <div className="card">
            <h2 className="card-title">{props.title}</h2>
            <div className="items">
                {props.data.map(i => {
                    return (
                            <Draggable
                                key = {i.task}
                                handle=".handle"
                                defaultPosition={{x: 0, y: 0}}
                                position={null}
                                grid={[25, 25]}
                                scale={1}
                                //onStart={(e) => handleStart(identifier,e)}
                                onStop={(e,ui) => handleStop(i,identifier,ui)}
                                >
                                    <p className={`item handle ${identifier}`}>
                                        {i.task}
                                    </p>        
                            </Draggable>
                            );
                })}
            </div>
        </div>
    );
}

export default connect()(Card);