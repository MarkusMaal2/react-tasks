import './Tasks.css'

import TaskList from './TaskList'
import TaskFilter from './TaskFilter'
import React from "react";

function Tasks(props) {
    return (
        <div>
            <p>Tasks</p>
            <TaskFilter></TaskFilter>
            <TaskList></TaskList>
        </div>
    )
}

export default Tasks