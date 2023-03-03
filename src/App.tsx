import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType = { id: string, title: string, filter: FilterValuesType }

type TasksStateType = {
    [key: string]: TaskType[]
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<TodolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(taskId: string, todolistId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})
        /*        let filteredTasks = tasks.filter(t => t.id != id);
                setTasks(filteredTasks);*/
    }

    function addTask(title: string, todolistId: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
        /*        let task = {id: v1(), title: title, isDone: false};
                let newTasks = [task, ...tasks];
                setTasks(newTasks);*/
    }

    function changeStatus(taskId: string, newIsDone: boolean, todolistId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map( t => t.id === taskId ? {...t, isDone: newIsDone} : t)})
        /*        let task = tasks.find(t => t.id === taskId);
                if (task) {
                    task.isDone = isDone;
                }

                setTasks([...tasks]);*/
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        setTodolists(todolists.map( tl => tl.id === todolistId ? {...tl, filter: value} : tl))
        /*        setFilter(value);*/
    }

    const renderedComponents =
        todolists.map(tl => {

            let tasksForTodolist = tasks[tl.id];

            if (tl.filter === "active") {
                tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
            }
            if (tl.filter === "completed") {
                tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
            }

            return (
                <Todolist
                    key={tl.id}
                    todolistId={tl.id}
                    title={tl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tl.filter}
                />
            )
        })

    return (
        <div className="App">
            {renderedComponents}
        </div>
    );
}

export default App;
