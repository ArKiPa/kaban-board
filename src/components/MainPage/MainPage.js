import React, {useContext} from 'react';
import './MainPage.css';
import TaskList from '../TaskList/TaskList.js'
import Context from '../Context/Context.js'

function clearTask(store) {
    store.setBacklogCount(0);
    store.setReadyCount(0);
    store.setInProgressCount(0);
    store.setFinishedCount(0);
    localStorage.clear();
}

function MainPage() {
  const store = useContext(Context)
  return ( 
    <main className='kanban-board-main'>
      <div className='container'>
        <div className='kanban-board-main-block'>
            <TaskList taskListName={'Backlog'} />
            <TaskList taskListName={'Ready'} />
            <TaskList taskListName={'In Progress'} />
            <TaskList taskListName={'Finished'} />
        </div>
        <button className='kanban-board-botton' onClick={() => clearTask(store)}>Очистить все задачи</button>
      </div>
    </main>
);
};

export default MainPage;
