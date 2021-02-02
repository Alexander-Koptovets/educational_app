import React from 'react'
import { Todo } from './todo' 
import './todos_style.css'

export class Todos extends React.Component {
    render() {
        return (
            <div className='todos'>
                <div className='todo-input-wrapper'>
                    <input 
                        className='todo-input'
                        placeholder='Death Note'
                        type='text'
                        value={this.props.textValue} 
                        onChange={this.props.todoText}  
                    />
                    <button onClick={this.props.addTodo} className='todo-add-btn'>Add</button>
                </div>
                <div>
                    {this.props.todo.map((item, index) => 
                        <Todo 
                            key={index}
                            text={item.text}
                            status={item.finished}
                            removeTodo={() => this.props.removeTodo(item.id)}
                            editText={() => this.props.editText(item.id)}
                            crossOutText={() => this.props.crossOutText(item.id)}
                        />
                    )}
                </div>
            </div>
        )
    }
}