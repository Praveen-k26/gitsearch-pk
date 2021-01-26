import {findByTestAttr} from "../../../test/testUtils";
import {shallow} from "enzyme";
import CustomButton from "./button.component";
import React from "react";

const defaultProps = {success: false}


const setUp = (props= {}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<CustomButton {...setUpProps}/>)
}


test('Custombutton exists',()=>{
    const wrapper = setUp({success: false});
    const CustomButton = findByTestAttr(wrapper, 'customButton');
    expect(CustomButton).toHaveLength(1);
});

test('Custom button clicked',()=>{
    const mockFn = jest.fn();
    const wrapper = shallow(<CustomButton onclick={mockFn}/>)
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
});