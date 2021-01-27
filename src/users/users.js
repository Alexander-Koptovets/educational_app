import React from "react";
import { Form } from './form'
import { User } from './user'
import './index.css'

const URL = 'https://600d9cedf979dd001745ce20.mockapi.io';

export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [], 
            userName: '',
            text: '',
            userid: '',
        };

        this.userInfo = this.userInfo.bind(this);
        this.addUser = this.addUser.bind(this);
        this.inputName = this.inputName.bind(this);
        this.inputText = this.inputText.bind(this);
        this.abortController = null;
    }
    inputName(e) {
        this.setState({
            userName: e.target.value
        })
    }

    inputText(e) {
        this.setState({
            text: e.target.value
        })
    }

    addUser() {
        this.setState({
            userName: '',
            text: '' 
        })
    }

    async fetchData() {
        const response = await fetch(URL + '/posts', {
            signal: this.getAbortSignal(),
        });

        const data = await response.json();

        this.setState({
            users: data,
        });
    }

    userInfo(user) {
        this.setState({
            userName: user.user.title,
            text: user.user.text, 
            userid: user.user.id
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillUnmount() {
        if (this.abortController) {
            this.abortController.abort();
            this.abortController = null;
        }
    }

    getAbortSignal() {
        this.abortController = new AbortController();

        return this.abortController.signal;
    }

    async removeUser(user) {
        await fetch(URL + '/posts/' + user, {
            method: 'DELETE',
            signal: this.getAbortSignal(),
        });

        await this.fetchData();
        this.addUser();
    }

    async addNewUser(name, text) {        
        await fetch(URL + '/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: name,
                text: text,
            }),
            signal: this.getAbortSignal(),
        });

        this.fetchData();
        this.addUser();
    }

    async updateUser(name, text, id) {
        await fetch(URL + '/posts/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                title: name, 
                text: text
            }),
            signal: this.getAbortSignal(),
        });

        await this.fetchData();
        this.addUser(); 
    }

    render() {
        const {userName, text, userid, users} = this.state;
        
        return (
            <div className='users-wrapper'>
                <div className='user'>
                    <h1>Users</h1>
                    {users.map(user =>
                        <User 
                            userName={user.title}
                            text={user.text}
                            user={() => this.userInfo({user})} 
                        />        
                    )}
                    <button onClick={this.addUser} className='btn-add-user'>Add user</button>
                </div>
                <div className='form'>
                    <h1>Form</h1>
                    <Form 
                        nameValue={userName}
                        textValue={text}
                        userName={this.inputName}
                        text={this.inputText}
                        onAddNewUser={() => this.addNewUser(userName, text)}
                        onRemoveUser={() => this.removeUser(userid)}
                        onUpdatePost={() => this.updateUser(userName, text, userid)}
                    />
                </div>
            </div>
        )
    }
}