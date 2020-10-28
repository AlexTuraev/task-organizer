import React from 'react';
import './list.css';

import ListItem from '../list-item';

export default class List extends React.Component {
    render(){
        const {items, onDeleted, toggleImportant, toggleDone, editLabel} = this.props;
        const elements = items.map( (item) => {
            const {id, ...itemProps} = item;
            return(
                <li className='li' key = {id}>
                    <ListItem {...itemProps}
                    onDeleted = {() => onDeleted(id)}
                    toggleImportant = {() => toggleImportant(id)}
                    toggleDone = {() => toggleDone(id)}
                    editLabel = {(value) => editLabel(id, value)}/>
                </li>
            );
        });

        return(
            <ul className='list'>
                    {elements}
            </ul>
        );
    }
}