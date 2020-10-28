import React from 'react';

import './app-header.css';

const AppHeader = ({total, toDo, done}) => {
    return(
        <div>
            <h1>My organizer</h1>
            <span className='span-text'>всего - {total} сделать - {toDo} сделано - {done}</span>
        </div>
    )
    ;
}

export default AppHeader;
