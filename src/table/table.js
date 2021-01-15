import React from 'react' 
import './index.css'

export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            name: [],
            surname: [],
            phone: [], 
            checkName: false,
            checkSurname: false,
            checkPhone: false,
        };
        this.showForm = this.showForm.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.checkName = this.checkName.bind(this);
        this.checkSurname = this.checkSurname.bind(this);
        this.checkPhone = this.checkPhone.bind(this);
        this.clear = this.clear.bind(this);
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

    saveContact() {
        let name = this.refs.name.value;
        let surname = this.refs.surname.value;
        let phone = this.refs.phone.value;

        let arrName = this.state.name;
        let arrSurname = this.state.surname;
        let arrPhone = this.state.phone;

        arrName.push(name);
        arrSurname.push(surname);
        arrPhone.push(phone);

        this.setState({
            name: arrName,
            surname: arrSurname,
            phone: arrPhone,
            showForm: false, 
            checkName: false,
            checkSurname: false,
            checkPhone: false,
        })
    }

    clear() {
        this.setState({
            name: [],
            surname: [],
            phone: [] 
        })
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm  
        })
    }

    render() {
        let colorName = this.state.checkName == true ? 'green' : 'red';
        let colorSurname = this.state.checkSurname == true ? 'green' : 'red';
        let colorPhone = this.state.checkPhone == true ? 'green' : 'red'; 
        return (
            <div className='wrapper'>
                <table className='contacts'>
                    <td>
                        <tr>First name</tr>
                        {this.state.name.map(name => 
                            <tr>{name}</tr>
                        )}
                    </td>
                    <td>
                        <tr>Second name</tr>
                        {this.state.surname.map(surname => 
                            (<tr>{surname}</tr>)
                        )}
                    </td>
                    <td>
                        <tr>Phone</tr>
                        {this.state.phone.map(phone => 
                            (<tr>{phone}</tr>)
                        )}
                    </td>
                </table>
                {this.state.showForm
                ? (<div className='form'>
                    <input 
                        type='text'
                        placeholder='Name'
                        ref='name'
                        onChange={this.checkName}
                        style={ {borderColor: colorName} }
                    />
                    <input 
                        type='text'
                        placeholder='Surname'
                        ref='surname'
                        onChange={this.checkSurname}
                        style={ {borderColor: colorSurname} }
                    />
                    <input 
                        type='text'
                        placeholder='Phone'
                        ref='phone'
                        onChange={this.checkPhone}
                        style={ {borderColor: colorPhone} }
                    />
                    <div>
                        <button className='close-form-btn' onClick={this.showForm}>Close Form</button>
                        {(this.state.checkName && this.state.checkSurname && this.state.checkPhone) 
                        ? <button className='save-contacts-btn' onClick={this.saveContact}>Save Contact</button>
                        : <button className='save-contacts-disabled-btn' disabled>Save Contact</button>}
                    </div>
                  </div>)
                : <div> 
                    <button className='show-form-btn' onClick={this.showForm}>Show Form</button>
                    <button className='clear-contacts-btn' onClick={this.clear}>Clear Contacts</button>
                  </div>}
            </div>
        )
    }
}