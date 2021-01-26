import React from 'react';


const ErrorMessage =(props) => (
    <div>
       <h2 className='error-message'>Error!! {props.val}</h2>
    </div>
)

export default ErrorMessage;