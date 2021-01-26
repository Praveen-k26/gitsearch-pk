import React from 'react';

import './spinner.styles.scss';

const Spinner = () => (
    <div className='spinner-overlay' data-test='spinner'>
        <div className='spinner-container' />
    </div>
);

export default Spinner;