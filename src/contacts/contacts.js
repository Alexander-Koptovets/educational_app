import React from 'react' 
import './index.css'
import { FormComponent } from '../form/form'
import { connect } from 'react-redux'

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
        };
        
        this.showForm = this.showForm.bind(this);
        this.clearContacts = this.clearContacts.bind(this);
    }
    clearContacts() {
        this.props.onClearName();
        this.props.onClearSurname();
        this.props.onClearPhone();
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm  
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <table className='contacts'>
                    <td>
                        <tr>First name</tr>
                        {this.props.contacts.names.map((name, i) => 
                            <tr key={i}>{name}</tr>
                        )}
                    </td>
                    <td>
                        <tr>Surname</tr>
                        {this.props.contacts.surnames.map((surname, i) => 
                            <tr key={i}>{surname}</tr>
                        )}
                    </td>
                    <td>
                        <tr>Phone</tr>
                        {this.props.contacts.phones.map((phone, i) => 
                            <tr key={i}>{phone}</tr>
                        )}
                    </td>
                </table>
                {this.state.showForm
                ? <FormComponent />
                : <div> 
                    <button className='show-form-btn' onClick={this.showForm}>Show Form</button>
                    <button className='clear-contacts-btn' onClick={this.clearContacts}>Clear Contacts</button>
                  </div>}
                  {this.state.showForm
                  ? <button className='close-form-btn' onClick={this.showForm}>Close Form</button>
                  : null}
            </div>
        )
    }
}

export const ContactsComponent = connect(
    state => ({
        contacts: state 
    }),
    dispatch => ({
        onClearName: () => {
            dispatch({ type: 'CLEAR_NAMES' })
        },
        onClearSurname: () => {
            dispatch({ type: 'CLEAR_SURNAMES' })
        },
        onClearPhone: () => {
            dispatch({ type: 'CLEAR_PHONES' })
        }
    })
)(Contacts); 