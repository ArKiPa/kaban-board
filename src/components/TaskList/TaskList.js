import React, {useContext, useState} from 'react';
import './TaskList.css';
import Context from '../Context/Context.js'
import { Link } from 'react-router-dom';

function AddTask(taskListClass) {
    let parent = document.querySelector("." + taskListClass)
    let button = parent.querySelector('.add-task-button')
    let taskArray = []
    let input = ''
    if (taskListClass === 'Backlog') {
        input = parent.querySelector('.add-task-input');
    } else {
        input = parent.querySelector('.add-task-select');
    }

    if (button.textContent === '+Add card') {
        button.textContent = 'Submit';
        input.classList.toggle('input-visualization')
    } else {
        button.innerHTML = '<span>+</span><span>Add card</span>';
        let spanPlus = parent.querySelector('span');
        spanPlus.classList.add('symbol-plus');
        taskArray = JSON.parse(localStorage.getItem(taskListClass +'-task'))
        taskArray =  taskArray || [];
        input.classList.toggle('input-visualization')
        taskArray.push(input.value);
        localStorage.setItem(taskListClass +'-task', JSON.stringify(taskArray));
    }
}

function handleClick(taskListClass, setbuttonDisabled, setInputValue, store, countTask) {
    let AddButton = document.querySelector("." + taskListClass).querySelector('.add-task-button')
    if (!(AddButton.textContent === '+Add card') && (taskListClass === 'Backlog')) {
        store.setBacklogCount(store.BacklogCount + 1);
    }
    if (!(AddButton.textContent === '+Add card') && (taskListClass === 'Ready')) {
        store.setReadyCount(store.ReadyCount + 1);
    }
    if (!(AddButton.textContent === '+Add card') && (taskListClass === 'InProgress')) {
        store.setInProgressCount(store.InProgressCount + 1);
    }
    if (!(AddButton.textContent === '+Add card') && (taskListClass === 'Finished')) {
        store.setFinishedCount(store.FinishedCount + 1);
    }
    if (taskListClass === 'Backlog') {
        if (AddButton.textContent === '+Add card') {
            setbuttonDisabled(true);
        } else {
            setInputValue('')
            }
    }
    AddTask(taskListClass);
}

function checkInput (value, setInputValue, setbuttonDisabled) { 
    setInputValue(value)
    if (String(value).length<1) {
    setbuttonDisabled(true);
    } else {
        setbuttonDisabled(false);
    }
}

function TaskList({taskListName}) {
    let BacklogTask = JSON.parse(localStorage.getItem('Backlog-task'));
    let ReadyTask = JSON.parse(localStorage.getItem('Ready-task'));
    let InProgressTask = JSON.parse(localStorage.getItem('InProgress-task'));
    let FinishedTask = JSON.parse(localStorage.getItem('Finished-task'));
    BacklogTask =  BacklogTask || [];
    ReadyTask =  ReadyTask || [];
    InProgressTask =  InProgressTask || [];
    FinishedTask =  FinishedTask || [];
    const store = useContext(Context)
    store.setBacklogCount(BacklogTask.length);
    store.setReadyCount(ReadyTask.length);
    store.setInProgressCount(InProgressTask.length);
    store.setFinishedCount(FinishedTask.length);

    const taskListClass = taskListName.replace(/ /g,'');
    const [buttonDisabled, setbuttonDisabled] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    let taskArray = [];
    let taskArrayBefore = [];
    let countTask = '';
    let countTaskBefore = '';

    if (taskListClass === 'Backlog') {
        taskArray = BacklogTask;
        countTask = store.BacklogCount
    }
    if (taskListClass === 'Ready') {
        taskArray = ReadyTask;
        taskArrayBefore = BacklogTask;
        countTask = store.ReadyCount
        countTaskBefore = store.BacklogCount
    }
    if (taskListClass === 'InProgress') {
        taskArray = InProgressTask;
        taskArrayBefore = ReadyTask;
        countTask = store.InProgressCount
        countTaskBefore = store.ReadyCount
    }
    if (taskListClass === 'Finished') {
        taskArray = FinishedTask;
        taskArrayBefore = InProgressTask;
        countTask = store.FinishedCount
        countTaskBefore = store.InProgressCount
    }
    if (!(taskListClass === 'Backlog')) {
        (countTaskBefore<1) ? ((!buttonDisabled) && setbuttonDisabled(true)) : ((buttonDisabled) && setbuttonDisabled(false))
    }
    return ( 
        <div className="task-list-panel">
            <div className={taskListClass+" task-list-margin"}>
                <p>{taskListName}</p>
                <div className="task-list">
                    { taskArray.map((item, index) => {
                        if (index<countTask) {   
                            let link = "/" + taskListClass +"/"+ index
                            return (<Link to={link} ><button className='task-from-list' key={item+''+index}>{item}</button></Link>)
                            }   
                        })
                    }
                </div>
                {(taskListClass === 'Backlog') && <input className="add-task-input input-visualization" value={inputValue} onChange={(e) => checkInput(e.target.value, setInputValue, setbuttonDisabled)}></input>}
                <select className="add-task-select add-task-input input-visualization" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                    {!(taskListClass === 'Backlog') && (taskArrayBefore.map((item, index) => {  
                        if (index<countTaskBefore) {
                            return (<option className='add-task-select-option' value={item} key={item+''+index}>{item}</option>)
                            }
                        })
                    )}
                </select>
                <button className="add-task-button" disabled={buttonDisabled} onClick={() => handleClick(taskListClass, setbuttonDisabled, setInputValue, store)}>
                    <span className="symbol-plus">+</span>
                    <span>Add card</span>
                </button>
            </div>
        </div>
    );
};

export default TaskList;
