import './MainPage.css'
import './MonthTasks/MonthTasks'
import MonthTasks from './MonthTasks/MonthTasks'
import DayTasks from './DayTasks/DayTasks'
import Panel from './Panel/Panel'

function MainPage() {

    return (
        <header>
            <MonthTasks />
            <Panel />
            <DayTasks />
        </header>
    )
}

export default (MainPage)

