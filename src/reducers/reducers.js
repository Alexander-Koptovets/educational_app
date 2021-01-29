import { combineReducers } from 'redux'
import { names } from './names'
import { phones } from './phones'
import { surnames } from './surnames'
import { user } from './users'

export default combineReducers({
    names,
    surnames,
    phones,
    user
})