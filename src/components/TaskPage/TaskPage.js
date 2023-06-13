import React, {useState} from 'react';
import './TaskPage.css';
import {Link, useParams} from 'react-router-dom';

function buttonEdit(button, textId, textArea) {
  if (button.textContent==='Редактировать') {
    document.querySelector('.task-details-text').removeAttribute('disabled')
    button.textContent='Сохранить'
  } else {
    button.textContent = 'Редактировать' 
    document.querySelector('.task-details-text').setAttribute('disabled', null) 
    localStorage.setItem(textId, JSON.stringify(textArea));
  }

}

function TaskPage() {
  const params = useParams();
  const taskHeader =  JSON.parse(localStorage.getItem(params.classId + '-task'))[params.userId]
  const [textArea, setTextArea] = useState('This task has no description');
  const textId = params.classId+params.userId
  const oldText = JSON.parse(localStorage.getItem(textId))
  if (textArea==='This task has no description' && oldText !== 'This task has no description') {
    oldText && setTextArea(oldText)
  }

    return ( 
      <main className='kanban-board-main task-details-main'>
        <div className='container'>
          <div className='task-details-main-margin'>
            <div className='task-details-header-block'>
              <p className='task-details-header'>{taskHeader}</p>
              <Link to='/'><button className='task-details-exit'></button></Link>
            </div>
            <textarea className='task-details-text' disabled value={textArea} onChange={(e) => setTextArea(e.target.value)}>fffff</textarea>
            <button className='kanban-board-botton' onClick={(e) => buttonEdit(e.target, textId, textArea)}>Редактировать</button>
          </div>
        </div>
      </main>
  );
}

export default TaskPage
