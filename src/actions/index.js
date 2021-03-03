export const dragTask = (task,from,x) => {
    return {
        type: "TASK_DRAGGED",
        payload: {task,from, x}
    };
};