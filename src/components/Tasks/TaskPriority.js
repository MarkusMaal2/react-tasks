import React from "react";
import './TaskPriority.css'
const TaskPriority = (props) => {
    let priority = props.priority;
    let strPriority = ""
    switch (priority) {
        case 1: strPriority = "low"
            break
        case 2: strPriority = "medium"
            break
        case 3: strPriority = "high"
            break
        case 4: strPriority = "urgent"
            break
    }
    return (
        <li>
            {strPriority}
        </li>
    )
}

export default TaskPriority;