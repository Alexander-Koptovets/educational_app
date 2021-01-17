import React from 'react'
import { connect } from 'react-redux'
import './index.css'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkName: false,
            checkSurname: false,
            checkPhone: false,
        }

        this.saveContact = this.saveContact.bind(this);
        this.checkName = this.checkName.bind(this);
        this.checkSurname = this.checkSurname.bind(this);
        this.checkPhone = this.checkPhone.bind(this);

        this.nameRef = React.createRef();
        this.surnameRef = React.createRef();
        this.phoneRef = React.createRef();
    }
    saveContact() {
        this.props.onSaveName(this.nameRef.current.value);
        this.props.onSaveSurname(this.surnameRef.current.value);
        this.props.onSavePhone(this.phoneRef.current.value);

        this.nameRef.current.value = '';
        this.surnameRef.current.value = '';
        this.phoneRef.current.value = '';

        this.setState({
            checkName: false,
            checkSurname: false,
            checkPhone: false 
        }); 
    }

    checkName(e) {
        this.setState({checkName: e.target.value.length > 0})
    }

    checkSurname(e) {
        this.setState({
            checkSurname: e.target.value.length > 0 
        })  
    }

    checkPhone(e) {
        this.setState({
            checkPhone: e.target.value.length > 0
        }) 
    }

    render() {
        let colorName = this.state.checkName == true ? 'green' : 'red';
        let colorSurname = this.state.checkSurname == true ? 'green' : 'red';
        let colorPhone = this.state.checkPhone == true ? 'green' : 'red'; 

        return (
            <div className='form'>
            <input 
                type='text'
                placeholder='Name'
                ref={this.nameRef}
                onChange={this.checkName}
                style={ {borderColor: colorName} }
            />
            <input 
                type='text'
                placeholder='Surname'
                ref={this.surnameRef}
                onChange={this.checkSurname}
                style={ {borderColor: colorSurname} }
            />
            <input 
                type='text'
                placeholder='Phone'
                ref={this.phoneRef}
                onChange={this.checkPhone}
                style={ {borderColor: colorPhone} }
            />
            <div>
                {(this.state.checkName && this.state.checkSurname && this.state.checkPhone) 
                ? <button className='save-contacts-btn' onClick={this.saveContact}>Save Contact</button>
                : <button className='save-contacts-disabled-btn' disabled>Save Contact</button>}
            </div>
        </div>
        )
    }
}

export const FormComponent = connect(
    state => ({
        contacts: state 
    }),
    dispatch => ({
        onSaveName: (name) => {
            dispatch({ type: 'ADD_NAME', payload: name })
        },
        onSaveSurname: (surname) => {
            dispatch({ type: 'ADD_SURNAME', payload: surname })
        },
        onSavePhone: (phone) => {
            dispatch({ type: 'ADD_PHONE', payload: phone })
        }
    })
)(Form); 