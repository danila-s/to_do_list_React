import React from "react";
import { connect } from "react-redux";
import './DayTasks.css'
import { deleteTask } from '../../redux/actions'


class DayTasks extends React.Component {


    render() {
        const { dayTasks, deleteTask } = this.props
        return (
            <div>
                <h1>Задачи на день :</h1>
                <div className='month-tasks-container'>
                    {dayTasks && dayTasks.map((item, index) => {
                        return <div key={index} className='month-task'>
                            <div className='button-container'>
                                <button className='delete-button' onClick={() => deleteTask(index, 'day')}>X</button>
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
        dayTasks: state.dayTasks
    };
};

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (index, type) => dispatch(deleteTask(index, type))
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(DayTasks);