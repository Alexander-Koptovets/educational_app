import React from 'react'
import './todo_style.css'

export class Todo extends React.Component {
    render() {
        return (
            <div className='todo'>
                <input type='checkbox' onClick={this.props.crossOutText}/>
                {this.props.status === true 
                ? <p className='text crossed-out'>{this.props.text}</p>
                : <p className='text'>{this.props.text}</p>}
                <div>
                    <button onClick={this.props.editText} className='todo-btn edit-todo'>Edit</button>
                    <button onClick={this.props.removeTodo} className='todo-btn delete-todo'>Delete</button>
                </div>
            </div>
        )
    }
}