import React, { Component } from 'react' 
import './App.css';
import { ContactsComponent } from './contacts/contacts'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Card } from './card/card'
import { Home } from './home/home'
import { Timer } from './timer/timer'
import { Users } from './users/users'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/home/home' component={Home}/>
        <Route path='/contacts/contacts' component={ContactsComponent}/>
        <Route path='/card/card' component={Card}/>
        <Route path='/timer/timer' component={Timer}/>
        <Route path='/users/users' component={Users}/>
      </div>
      <Redirect from='/' to='/home/home' />
    </BrowserRouter>
  )
}

export default App; 