import React from 'react';
import './Spinner.css'

const Spinner = ({spinner}) => {

    return (
        spinner
        ?   <div className='spinner'>
                <p className='spinner-text'>Loading...</p>
            </div>
        :   <></>
    );
};

export default Spinner;
