import {findByTestAttr} from "../../../test/testUtils";
import {shallow} from "enzyme";
import React from "react";
import Spinner from "./spinner.component";

const defaultProps = {success: false}


const setUp = (props= {}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<Spinner {...setUpProps}/>)
}



test('Spinner Component exists',()=>{
    const wrapper = setUp({success: false});
    const CardWrapper = findByTestAttr(wrapper, 'spinner');
    expect(CardWrapper).toHaveLength(1);
});

