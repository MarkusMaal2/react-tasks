import React, {useState} from "react"
import './NewTask.css'

import TaskForm from "./TaskForm"

const NewTask = (props) => {
    const [addFormVisible, setAddForm] = useState(false)
    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData = {
            ...enteredTaskData,
            id: Math.random().toString()
        }
        props.onAddTask(taskData)
    }
    const toggleFormHandler = () => {
        setAddForm(!addFormVisible)
    }

    return (
        <div className="new-expense">
            <TaskForm onToggleForm={toggleFormHandler} onSaveTaskData={saveTaskDataHandler} formVisible={addFormVisible}></TaskForm>
        </div>
    )
}

export default NewTask