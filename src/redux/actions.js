const ADD_NEW_TASK = 'ADD_NEW_TASK';
const DELETE_TASK = 'DELETE_TASK'

function addNewTask(task) {
    return {
        type: ADD_NEW_TASK,
        payload: {
            task: task
        },
    };
}

function deleteTask(index, type) {
    return {
        type: DELETE_TASK,
        payload: {
            index: index,
            type: type,
        },
    };
}




export { ADD_NEW_TASK, DELETE_TASK, addNewTask, deleteTask }