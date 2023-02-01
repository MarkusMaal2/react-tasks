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
        setEnteredPriority(e.target.value)
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
        props.onToggleForm(props.formVisible)
        props.onSaveTaskData(taskData)
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredPriority('')

    }

    const toggleVisibleHandler = (e) => {
        props.onToggleForm(props.formVisible)
        e.preventDefault()
    }

    return (

        <div>
            { props.formVisible &&
                <form onSubmit={submitHandler}>
                    <div className="new-task__controls">
                        <div className="new-task__control">
                            <label>Title</label>
                            <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                        </div>
                        <div className="new-task__control">
                            <label>Priority</label>
                            <input type="number" min="0.01" step="0.01" onChange={priorityChangeHandler}
                                   value={enteredPriority}/>
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
            }
            { !props.formVisible &&
                <form onSubmit={toggleVisibleHandler}>
                    <div className="new-task__actions"><button type="submit">Add task</button></div>
                </form>
            }
        </div>
    )
}
export default TaskForm