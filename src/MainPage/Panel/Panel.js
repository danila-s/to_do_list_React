import React from "react";
import './Panel.css'
import { connect } from 'react-redux'
import { addNewTask } from '../../redux/actions'

class Panel extends React.Component {

    state = {
        isActive: false
    }

    addNewTask = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        this.props.addNewTask({ type: form.get('task-type'), text: form.get('task-text') })
    }

    render() {
        const { isActive } = this.state;
        return (
            (isActive && < div className="panel" onMouseLeave={() => { this.setState({ isActive: false }) }}>
                <h1>Создать новую задачу</h1>
                <form onSubmit={this.addNewTask}>
                    <label >Когда необходимо выполнить задачу ? :
                        <select name="task-type">
                            <option value='day'>Сегодня</option>
                            <option value='month'>В этом месяце.</option>
                        </select></label>
                    <textarea maxLength='150' name='task-text'></textarea>
                    <input type='submit'></input>
                </form>
            </div > || <div className="create-new-task" onMouseEnter={() => { this.setState({ isActive: true }) }}>
                    <div >Добавить задачу</div>
                </div>)
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addNewTask: (task) => dispatch(addNewTask(task))
});

const mapStateToProps = (state) => {
    return {
        dayTasks: state.dayTasks
    };
};

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(Panel);

