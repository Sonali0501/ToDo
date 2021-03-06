import React from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import {action} from '../actions';
import {todoState} from '../reducers';

const Card = (props) => {

    const identifier = props.title==="Done" ? "done" : props.title==="To Do" ? "todo" : "inprogress";

    const handleStop = (task, ui) => {
        console.log(task, ui);
        if(ui.lastY >= 300){
            props.deleteTodo(task);
        }
        if(task.type === todoState.todo){
            if(ui.lastX >= 625){
                props.dragTodo({id:task.id, type:todoState.done})
            }
            else if(ui.lastX >= 275){
                props.dragTodo({id:task.id, type:todoState.inprogress})
            }
        }
        else if(task.type === todoState.inprogress){
            if(ui.lastX >= 275){
                props.dragTodo({id:task.id, type:todoState.done})
            }
            else if(ui.lastX <= -275){
                props.dragTodo({id:task.id, type:todoState.todo})
            }
        }
        else if(task.type === todoState.done){
            if(ui.lastX <= -625){
                props.dragTodo({id:task.id, type:todoState.todo})
            }
            else if(ui.lastX <= -275){
                props.dragTodo({id:task.id, type:todoState.inprogress})
            }
        }
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
                            onStop={(e,ui) => handleStop(i,ui)}
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


export default connect(null,{ dragTodo:action.dragTodo, deleteTodo: action.deleteTodo })(Card);