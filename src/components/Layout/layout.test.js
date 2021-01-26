import {findByTestAttr} from "../../../test/testUtils";
import {shallow} from "enzyme";
import React from "react";
import Layout from "./layout.component";

const defaultProps = {success: false}


const setUp = (props= {}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<Layout {...setUpProps}/>)
}



test('Layout exists',()=>{
    const wrapper = setUp({success: false});
    const CardWrapper = findByTestAttr(wrapper, 'layoutComponent');
    expect(CardWrapper).toHaveLength(1);
});

