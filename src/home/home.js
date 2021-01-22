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
        </div>
    )
}