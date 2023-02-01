import React from "react";

import './TasksItem.css'
import TaskDate from "./TaskDate";
import Card from "../UI/Card";

function TaskItem(props) {
    /*const [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        if (title !== "Updated!") {
            setTitle("Updated!")
        } else {
            setTitle(props.title)
        }
        //console.log(title)
    }*/
    return (
        <li>
            <Card className="tasks-item">
                <TaskDate date={props.date} />
                <div className="tasks-item__description">
                    <h2>
                        {props.title}
                    </h2>
                    <div className="tasks-item__price">
                        {props.priority}
                    </div>
                </div>
            </Card></li>
    )
}

export default TaskItem