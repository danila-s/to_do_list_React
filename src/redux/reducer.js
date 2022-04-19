import { ADD_NEW_TASK } from "./actions";

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
    return state;
}

export default reducer;