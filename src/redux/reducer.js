import { ADD_MONTH_TASK } from "./actions";

const initialState = {
    monthTasks: [{type : 'normal' , text: "Купить карточку в спортзал !"}],
    dayTasks: []
};

function reducer(state = initialState, action) {
    const { monthTasks, dayTasks } = state;

    if (action.type === ADD_MONTH_TASK) {
        const { newTask } = action.payload
        const newMonthTasks = [...monthTasks, newTask];
        const newState = { ...state, monthTasks: newMonthTasks };
        return newState;
    }
    return state;
}

export default reducer;