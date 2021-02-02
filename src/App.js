import React from 'react' 
import './App.css';
import { ContactsComponent } from './contacts/contacts'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Card } from './card/card'
import { Home } from './home/home'
import { Timer } from './timer/timer'
import { Users } from './users/users'
import { TestComponent } from './test/test'
import { TodoListComponent } from './todos/todoList'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/home/home' component={Home}/>
        <Route path='/contacts/contacts' component={ContactsComponent}/>
        <Route path='/card/card' component={Card}/>
        <Route path='/timer/timer' component={Timer}/>
        <Route path='/users/users' component={Users}/>
        <Route path='/test/test' component={TestComponent}/>
        <Route path='/todos/todoList' component={TodoListComponent}/>
      </div>
      <Redirect from='/' to='/home/home' />
    </BrowserRouter>
  )
}

export default App; 