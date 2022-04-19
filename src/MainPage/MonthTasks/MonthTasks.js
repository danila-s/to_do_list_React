import './MonthTasks.css'
import { connect } from 'react-redux'
import React from 'react'


class MonthTasks extends React.Component {

    render() {
        const { monthTasks } = this.props
        return (
            <div>
                <h1>Задачи на месяц :</h1>
                <div className='month-tasks-container'>
                    {monthTasks && monthTasks.map((item, index) => {
                        return <div key={index} className='month-task'><p className='text '>{item.text}</p></div>
                    })}
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        monthTasks: state.monthTasks
    };
};

const functionFromConnect = connect(mapStateToProps);

export default functionFromConnect(MonthTasks);