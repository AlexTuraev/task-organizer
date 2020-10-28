import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {
    /*state ={
        textSearch: ''
    }*/

    onChangeSearch = (e) => {
        /*this.setState({
            textSearch: e.target.value
        });*/
        this.props.onSearchPanel(e.target.value);
    }

    render(){
        return(
            <input className='input-class' type='text' placeholder='Type text to searching...' 
            onChange = {this.onChangeSearch}/>
        );
    }
}