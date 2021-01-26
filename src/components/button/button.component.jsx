import React from 'react';


const CustomButton = ({children,onclick, ...otherProps})  => (
    <button {...otherProps} className='button,' onClick={onclick} data-test='customButton'>
        {children}
    </button>
);

export default CustomButton