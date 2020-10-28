import React from 'react';

import './list-item.css';

export default class ListItem extends React.Component {

    onChangeLabel = (event) => {
        this.props.editLabel(event.target.value);
    }

    render() {
        const {label, important, done, onDeleted, toggleImportant, toggleDone} = this.props;

        const classNames = ['input-label list-item__span'];

        if (done) {
            classNames.push('list-item__done');
        };
        if(important){
            classNames.push('list-item__marked');
        }

        return(
            <div className='list-item'>
                <input type = 'text' className = {classNames.join(' ')} onDoubleClick = {toggleDone}
                     onChange={this.onChangeLabel} value={label}
                     title = 'Click to Edit or Double click to change status "Done"'>
                    
                </input>
                <button className='list-item__btn checkmark'
                onClick = {toggleImportant}>
                    V
                </button>
                <button className='list-item__btn delbtn'
                onClick = {onDeleted}>
                    X
                </button>
            </div>
        );
    }
}