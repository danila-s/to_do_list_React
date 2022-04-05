const ADD_MONTH_TASK = 'ADD_MONTH_TASK';

function addMonthTask(newTask) {
    return {
        type: ADD_MONTH_TASK,
        payload: {
            newTask: newTask
        },
    };
}




export { ADD_MONTH_TASK, addMonthTask }