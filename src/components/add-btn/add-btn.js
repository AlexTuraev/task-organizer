import React from 'react';

import './add-btn.css';

export default class AddBtn extends React.Component{
    state = {
        inputText: ''
    };

    onInputChange = (event) => {
        this.setState({
            inputText: event.target.value 
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onBtnClick(this.state.inputText);

        this.setState({
            inputText: ''
        });
    }

    render(){
        return (
            <form className='add-form'
            onSubmit = {this.onFormSubmit}>
                <button className='add-form__add-btn btn btn-outline-primary'>
                    Add item
                </button>

                <input type='text' className='add-form__input form-control' 
                placeholder='What needs to done...'
                onChange = {this.onInputChange}
                value={this.state.inputText}/>
            </form>
        );
    }
}