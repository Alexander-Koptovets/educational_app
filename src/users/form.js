import React from 'react'

export class Form extends React.Component {
    render() {
        return (
            <div className='form-wrapper'>
                <input
                className='input'
                value={this.props.nameValue}
                onChange={this.props.userName}
                type='text'
                placeholder="User name"
                />
                <input
                className='input'
                value={this.props.textValue}
                onChange={this.props.text}
                type='text'
                placeholder="Text"
                />
                {this.props.nameValue && this.props.textValue
                ? <div className='user-btn-wrapper'>
                    <button onClick={this.props.onAddNewUser} className='user-btn save'>Save</button>
                    <button onClick={this.props.onUpdatePost} className='user-btn update'>Update</button>
                    <button onClick={this.props.onRemoveUser} className='user-btn delete'>Delete</button>
                  </div>
                : <div className='user-btn-wrapper'>
                    <button disabled className='user-btn disabled-btn'>Save</button>
                    <button disabled className='user-btn disabled-btn'>Update</button>
                    <button disabled className='user-btn disabled-btn'>Delete</button>
                  </div>}
            </div>
        )
    }
}