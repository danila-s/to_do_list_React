import './MonthTasks.css'
import { connect } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'


class MonthTasks extends React.Component {

    render() {
        const { monthTasks } = this.props
        return (
            <div className='month-tasks-container'>
                {monthTasks && monthTasks.map((item , index) => {
                    return <div key={index}>{item.text}</div>
                })}
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