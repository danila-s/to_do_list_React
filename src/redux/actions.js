const ADD_NEW_TASK = 'ADD_NEW_TASK';

function addNewTask(task) {
    return {
        type: ADD_NEW_TASK,
        payload: {
            task: task
        },
    };
}




export { ADD_NEW_TASK, addNewTask }