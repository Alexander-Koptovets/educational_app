import { combineReducers } from 'redux'
import { names } from './names'
import { phones } from './phones'
import { surnames } from './surnames'
import { user } from './users'
import { todos } from './todos'

export default combineReducers({
    names,
    surnames,
    phones,
    user, 
    todos 
})