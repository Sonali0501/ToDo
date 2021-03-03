import { combineReducers } from 'redux';

const initalState = {
    Data : {
        Done: [
            { task: "Book the table"},
            { task: "Buy the suitcase"}
        ],
        InProgress: [
            { task: "Complete work report"},
            { task: "Grandpa birthday"}
        ],
        ToDo: [
            { task: "Buy Medicines"},
            { task: "Go to the dentist"},
            { task: "Do shopping"},
            { task: "Call to the car service"}
        ]
    }
}

const getData = () => {
    return initalState.Data;
}

export default combineReducers({
    Data: getData
});