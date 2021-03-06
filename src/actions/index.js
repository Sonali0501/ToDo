export const ADD_TODO = "ADD_TODO";
export const DRAG_TODO = "DRAG_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const action = {
    addTodo: function(data){
        return{
            type: ADD_TODO,
            payload: data
        }
    },
    dragTodo: function(data){
        return{
            type: DRAG_TODO,
            payload: data
        }
    },
    deleteTodo: function(data){
        return{
            type: DELETE_TODO,
            payload: data
        }
    }
}