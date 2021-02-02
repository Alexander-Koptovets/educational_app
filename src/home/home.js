import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export function Home() {
    return (
        <div className='wrapper-tasks'>
            <NavLink to='/contacts/contacts'>
                <div className='task red'>
                    <p className='task-name'>Классовые компоненты</p>
                </div>
            </NavLink>
            <NavLink to='/card/card'>
                <div className='task blue'>
                    <p className='task-name'> LifeCycle методы и Ref ссылки на DOM элементы</p>
                </div>
            </NavLink>
            <NavLink to='/timer/timer'>
                <div className='task task-3'>
                    <p className='task-name'>Timer Hooks</p>
                </div>
            </NavLink>
            <NavLink to='/users/users'>
                <div className='task task-4'>
                    <p className='task-name'>Книга контактов v2</p>
                </div>
            </NavLink>
            <NavLink to='/test/test'>
                <div className='task blue'>
                    <p className='task-name'>Книга контактов v2 (но с Redux-thunk)</p>
                </div>
            </NavLink>
            <NavLink to='/todos/todoList'>
                <div className='task task-5'>
                    <p className='task-name'>Todo-redux</p>
                </div>
            </NavLink>
        </div>
    )
}