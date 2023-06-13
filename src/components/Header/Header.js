import React from 'react';
import './Header.css';
import userAvatar from './images/user-avatar.svg';

function headerMenuClick() {
    document.querySelector('.kanban-board-header-menu').classList.toggle('kanban-board-header-menu-active')
    document.querySelector('.header-user-avatar-check').classList.toggle('header-user-avatar-check-active');;
}

function Header () {
    return (
        <header className='kanban-board-header'>
            <div className='container'>
                <div className='kanban-board-header-block'>
                    <h1 className='kanban-board-name'>Awesome Kanban Board</h1>
                    <div className='header-menu'>
                        <button className='header-menu-button' onClick={() => headerMenuClick()}>
                            <img className='header-user-avatar-icon' src={userAvatar}/>
                            <div className='header-user-avatar-check'></div>
                        </button>
                        <div className='kanban-board-header-menu kanban-board-header-menu-active'>
                            <div className='header-menu-triangle'></div>
                            <p className='header-menu-item'>Profile</p>
                            <p className='header-menu-item'>Log Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;