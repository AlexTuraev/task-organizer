import React from 'react'

import './storage-save-btn.css';

const StorageSaveBtn = ({onSaveBtn}) => {
    return(
        <button 
            onClick={onSaveBtn}
            className= 'save-btn btn btn-outline-primary'>
                Save data
        </button>
    );
}

export default StorageSaveBtn;