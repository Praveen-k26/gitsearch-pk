import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from "../../../test/testUtils";
import Navbar from "./navbar.component";

const defaultProps = {success: false}


const setUp = (props= {}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<Navbar {...setUpProps}/>)
}

test("renders without error", () => {
    const wrapper = setUp({success: false});
    const component = findByTestAttr(wrapper, 'navbar');
    expect(component.length).toBe(0);
})
