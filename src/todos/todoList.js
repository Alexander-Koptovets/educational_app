import React from 'react'
import { Todos } from './todos'
import { connect } from 'react-redux'

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {id: null};

        this.editText = this.editText.bind(this);
        this.todoText = this.todoText.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    editText(id) {
        this.props.onEditText(id);
        this.setState({id: id});
    }

    todoText(e) {
        this.props.onTodoText(e.target.value); 
    }

    addTodo() {
        this.props.onAddTodo(this.props.todoList.text, this.state.id);
        this.setState({id: null});
    }

    render() {
        return (
                <Todos
                    todo={this.props.todoList.todo}
                    todoText={this.todoText}
                    addTodo={this.addTodo}
                    textValue={this.props.todoList.text}
                    removeTodo={this.props.onRemove}
                    editText={this.editText}
                    crossOutText={this.props.onCrossOutText}
                />
        )
    }
}

export const TodoListComponent = connect(
    state => ({
        todoList: state.todos  
    }),
    dispatch => ({
        onAddTodo: (text, id) => {
            dispatch({ type: 'ADD_TODO', payload: {text, id} })
        },
        onRemove: (text) => {
            dispatch({ type: 'DELETE_TODO', payload: text })
        },
        onTodoText: (text) => {
            dispatch({ type: 'TEXT_TODO', payload: text })
        },
        onEditText: (id) => {
            dispatch({ type: 'EDIT_TODO', payload: id })
        },
        onCrossOutText: (id) => {
            dispatch({ type: 'CROSSOUT_TODO', payload: id })
        },
    })
)(TodoList); 