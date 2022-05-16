import React from "react";
import './Panel.css'
import { connect } from 'react-redux'
import { addNewTask } from '../../redux/actions'

class Panel extends React.Component {

    state = {
        isActive: false,
        type: 'day',
        text: ''
    }

    addNewTask = (e) => {
        const { type, text } = this.state;
        this.props.addNewTask({ type: type, text: text })
        this.setState({type : 'day' , text : ''})
    }

    changeType = (e) => {
        this.setState({ type: e.target.value })
    }

    changeText = (e) => {
        this.setState({ text: e.target.value })
    }

    keyPressed = (e) => {
        if(e.keyCode === 13){
            this.addNewTask();
        }
    }


    render() {
        const { isActive, type, text } = this.state;
        return (
            (isActive && < div className="panel" onMouseLeave={() => { this.setState({ isActive: false }) }}>
                <h1>Создать новую задачу</h1>
                <form>
                    <label >Когда необходимо выполнить задачу ? :
                        <select name="task-type" value={type} onChange={this.changeType}>
                            <option value='day'>Сегодня</option>
                            <option value='month'>В этом месяце.</option>
                        </select></label>
                    <textarea maxLength='150' name='task-text' value={text} onChange={this.changeText} onKeyUp={this.keyPressed}></textarea>
                    <button onClick={this.addNewTask}></button>
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

