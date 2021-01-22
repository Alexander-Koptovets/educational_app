import React from 'react'
import './index.css'

export class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstInputValue: false,
            secondInputValue: false, 
            thirdInputValue: false, 
            fourthInputValue: false, 
        }

        this.firstInput = React.createRef();
        this.secondInput = React.createRef();
        this.thirdInput = React.createRef();
        this.fourthInput = React.createRef();

        this.checkFirstInput = this.checkFirstInput.bind(this);
        this.checkSecondInput = this.checkSecondInput.bind(this);
        this.checkThirdInput = this.checkThirdInput.bind(this);
        this.checkFourthInput = this.checkFourthInput.bind(this);
    }

    checkFirstInput(e) {
        const { value, maxLength } = e.target;
        const number = value.slice(0, maxLength);

        this.setState({
            firstInputValue: number 
        })
    }

    checkSecondInput(e) {
        const { value, maxLength } = e.target;
        const number = value.slice(0, maxLength);

        this.setState({
            secondInputValue: number 
        })
    }

    checkThirdInput(e) {
        const { value, maxLength } = e.target;
        const number = value.slice(0, maxLength);

        this.setState({
            thirdInputValue: number 
        })
    }

    checkFourthInput(e) {
        const { value, maxLength } = e.target;
        const number = value.slice(0, maxLength);

        this.setState({
            fourthInputValue: number 
        })
    }

    componentDidMount() {
        this.firstInput.current.focus(); 
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.firstInputValue.length === 4) {
            this.secondInput.current.focus();
        }; 
        
        if (this.state.secondInputValue.length === 4) {
            this.thirdInput.current.focus();
        }; 
        
        if (this.state.thirdInputValue.length === 4) {
            this.fourthInput.current.focus();
        };
        
        if (this.state.fourthInputValue.length === 0) {
            this.thirdInput.current.focus();
        };
        
        if (this.state.thirdInputValue.length === 0) {
            this.secondInput.current.focus();
        }; 
        
        if (this.state.secondInputValue.length === 0) {
            this.firstInput.current.focus();
        }
    }

    render() {
        return (
            <div className='card'>
                <input 
                className='number-input'
                onChange={this.checkFirstInput}
                type='number'
                maxLength='4'
                value={this.state.firstInputValue}
                ref={this.firstInput}
                />
                <input
                className='number-input'
                onChange={this.checkSecondInput}
                type='number'
                maxLength='4'
                value={this.state.secondInputValue}
                ref={this.secondInput}
                />
                <input 
                className='number-input'
                onChange={this.checkThirdInput}
                type='number'
                maxLength='4'
                value={this.state.thirdInputValue}
                ref={this.thirdInput}
                />
                <input 
                className='number-input'
                onChange={this.checkFourthInput}
                type='number'
                maxLength='4'
                value={this.state.fourthInputValue}
                ref={this.fourthInput}
                />
            </div>
        )
    }
}
