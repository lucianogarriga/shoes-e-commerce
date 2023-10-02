import React from 'react';
import "./maxWidthContainer.css";

const MaxWidthContainer = ({children}) => {
    return (
        <div className='max-width-container'>
            {children}
        </div>
    );
}

export default MaxWidthContainer;
