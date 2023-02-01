import React, {useState} from "react";
import './TaskForm.css'

const TaskForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPriority, setEnteredPriority] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const priorityChangeHandler = (e) => {
        setEnteredPriority(Number(e.target.value))
        console.log(enteredPriority)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const taskData = {
            title: enteredTitle,
            priority: enteredPriority,
            date: new Date(enteredDate)
        }
        //console.log(taskData)
        props.onSaveTaskData(taskData)
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredPriority('')

    }

    return (

        <div>
            <form onSubmit={submitHandler}>
                <div className="new-task__controls">
                    <div className="new-task__control">
                        <label>New Task</label>
                        <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                    </div>
                    <div className="new-task__control">
                        <label>Select task priority</label>
                        <select onChange={priorityChangeHandler}>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                            <option value="4">Urgent</option>
                        </select>
                    </div>
                    <div className="new-task__control">
                        <label>Date</label>
                        <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler}
                               value={enteredDate}/>
                    </div>
                </div>
                <div className="new-task__actions">
                    <button type="submit">Add task</button>
                    <button type="submit">Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default TaskForm