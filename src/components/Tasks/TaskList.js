import React from "react";
import TasksItem from './TasksItem'

const TaskList = (props) => {
    return (
        <div>
            <p>TaskList</p>
            <TasksItem></TasksItem>
            <TasksItem></TasksItem>
            <TasksItem></TasksItem>
        </div>
    )
}

export default TaskList