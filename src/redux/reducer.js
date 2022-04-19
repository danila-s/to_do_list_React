import { ADD_NEW_TASK, DELETE_TASK } from "./actions";


const initialState = {
    monthTasks: [],
    dayTasks: []
};

function reducer(state = initialState, action) {
    const { monthTasks, dayTasks } = state;

    if (action.type === ADD_NEW_TASK) {
        const { type } = action.payload.task;

        if (type === 'day') {
            const newDayTasks = [...dayTasks, action.payload.task];
            const newState = { ...state, dayTasks: newDayTasks };
            return newState;
        }
        else if (type === 'month') {
            const newMonthTasks = [...monthTasks, action.payload.task];
            const newState = { ...state, monthTasks: newMonthTasks }
            return newState;
        }
    }
    if (action.type === DELETE_TASK) {
        const { type, index } = action.payload;
        if (type === 'day') {
            dayTasks.splice(index, 1)
            const newDayTasks = [...dayTasks]
            const newState = { ...state, dayTasks: newDayTasks};
            return newState;
        }
        else if (type === 'month') {
            monthTasks.splice(index, 1)
            const newMonthTasks = [...monthTasks]
            const newState = { ...state, monthTasks: newMonthTasks};
            return newState;
        }
    }
    return state;
}

export default reducer;