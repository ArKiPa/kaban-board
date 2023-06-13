import React, {useContext} from 'react';
import './Footer.css';
import Context from '../Context/Context.js'

function Footer () {
    const store = useContext(Context)
    return (
        <footer className='kanban-board-footer'>
            <div className='container'>
                <div className='kanban-board-footer-block'>
                    <div className='kanban-board-task-counter'>
                        <span className='kanban-board-active-task'>Active tasks: {store.BacklogCount}</span>
                        <span>Finished tasks: {store.FinishedCount}</span>
                    </div>
                    <span>Kanban board by Kirill, 2023</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer