import React from "react";
import { connect } from "react-redux";
import './DayTasks.css'


class DayTasks extends React.Component {


    render() {
        return (
            <div>Day</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        dayTasks: state.dayTasks
    };
};

const functionFromConnect = connect(mapStateToProps);

export default functionFromConnect(DayTasks);