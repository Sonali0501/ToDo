import { combineReducers } from 'redux';
import {ADD_TODO, DRAG_TODO, DELETE_TODO} from '../actions';
import { v4 as uuidv4 } from 'uuid';

export const todoState = {
    done: 'DONE',
    inprogress: 'INPROGRESS',
    todo: "TODO"
}

const initialState = [
    { id:1 ,task:'Book the table', type:todoState.done},
    { id:2 ,task:'Complete work report', type:todoState.inprogress},
    { id:3 ,task:'Buy Medicines', type:todoState.todo},
];

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            console.log('inside ADD_TODO', state, action);
            let todo = { id:uuidv4() ,task:action.payload.task, type:action.payload.type}
            return [...state,todo];
        
        case DRAG_TODO:
            let todos = state.map(i => {
                if(i.id === action.payload.id){
                    return {
                        ...i,
                        type: action.payload.type
                    };
                }
                return i;
            });
            return todos;

        case DELETE_TODO:
            return state.filter(i => i.id !== action.payload.id);

        default:
            return state;
    }
}


export default combineReducers({
    data: reducer
});