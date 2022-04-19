import './MonthTasks.css'
import { connect } from 'react-redux'
import React from 'react'
import { deleteTask } from '../../redux/actions'


class MonthTasks extends React.Component {



    render() {
        const { monthTasks , deleteTask} = this.props
        return (
            <div>
                <h1>Задачи на месяц :</h1>
                <div className='month-tasks-container'>
                    {monthTasks && monthTasks.map((item, index) => {
                        return <div key={index} className='month-task'>
                            <div className='button-container'>
                                <button className='delete-button' onClick={() => deleteTask(index, 'month')}>X</button>
                            </div>
                            <p className='text '>{item.text}</p>
                        </div>
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

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (index , type) => dispatch(deleteTask(index , type))
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(MonthTasks);