import { combineReducers } from 'redux';
import { ToDo, InProgress, Done } from '../DummyData';

const getTodoData = () => {
    return ToDo;
}
const getInProgressData = () => {
    return InProgress;
}
const getDoneData = () => {
    return Done;
}

export default combineReducers({
    Todo: getTodoData,
    InProgress: getInProgressData,
    Done: getDoneData
});