import './App.css'
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import React, {useState} from "react";

// sample data, just for testing
const DUMMY_TASKS = [
    {
        id: 'e1',
        date: new Date(2023, 0, 10),
        title: "Study React.js",
        priority: 3
    },
    {
        id: 'e2',
        date: new Date(2024, 6, 23),
        title: "Study Javascript",
        priority: 3
    }
]

// priority values
// 0 - all
// 1 - low
// 2 - medium
// 3 - high
const App = () => {
    const [currentPriority, setCurrentPriority] = useState(0)
    const [tasks, setTasks] = useState(DUMMY_TASKS)
    const addTaskHandler = (task) => {
        console.log("Recieved in App.js")
        setTasks((previousTasks) => {
            return [task, ...tasks]
        })
    }

    const changePriorityHandler = (priority) => {
        setCurrentPriority((previousPriority) => {
            return priority
        })
    }
    return (
        <div className="App">
            <NewTask onAddTask={addTaskHandler}></NewTask>
            <Tasks onChangePriority={changePriorityHandler} tasks={tasks} currentPriority={currentPriority}/>
        </div>
    )
}

export default App
