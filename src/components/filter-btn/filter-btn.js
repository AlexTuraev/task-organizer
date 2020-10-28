import React from 'react';

import './filter-btn.css'

const FilterBtn = ({filterBtnStatus, onFilterBtn}) => {
    const classNamePrimary = 'main-div__btn btn btn-outline-primary';
    const classNameSecondary = 'main-div__btn btn btn-outline-secondary';

    return(
        <div className = "btn-group">
                    <button 
                    className={(filterBtnStatus==='all') ? classNamePrimary : classNameSecondary}
                    onClick={() => onFilterBtn('all')}>
                        All
                    </button>

                    <button 
                    className={(filterBtnStatus==='todo') ? classNamePrimary : classNameSecondary}
                    onClick={() => onFilterBtn('todo')}>
                        To do
                    </button>

                    <button 
                    className={(filterBtnStatus==='done') ? classNamePrimary : classNameSecondary}
                    onClick={() => onFilterBtn('done')}>
                        Done
                    </button>
        </div>  
    );
}

export default FilterBtn;