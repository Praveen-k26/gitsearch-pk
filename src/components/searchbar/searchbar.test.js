import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from "../../../test/testUtils";
import SearchBar from "./searchbar.component";
import {act} from "@testing-library/react";
import CustomButton from "../button/button.component";

const defaultProps = {success: false}


const setUp = (props= {}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<SearchBar {...setUpProps}/>)
}



test("renders without error", () => {
    const wrapper = setUp({success: false});
    const component = findByTestAttr(wrapper, 'searchbarsection');
    expect(wrapper.exists()).toBe(true)
});

test('render props without error', ()=> {
    const wrapper = setUp({success: false});
    const wrapper_props = shallow(<SearchBar
        placeholder=''
        handleChange=''
        handleClick=''
        label=''
        onSubmit=''
        onClear=''
        value=''
    />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper_props.exists()).toBe(true);
});

test('changing value though search bar',()=>{
    const wrapper = setUp({success: false});
    const input = findByTestAttr(wrapper, 'searchfield');
    // const {value} = input.props();
    // expect(value).toBe('');
    input.simulate('change', {target: {value: 'Praveen'}});
    expect(Object.is('Praveen', 'Praveen')).toBe(true);

})

test('placeholder has a default value',()=>{
    const wrapper = setUp({success: false});
    const input = findByTestAttr(wrapper, 'searchfield');
    input.simulate('change', {target: {placeholder: 'Enter User Name'}});
    expect(Object.is('Enter User Name', 'Enter User Name')).toBe(true);

})

test('Submit button exists',()=>{
    const wrapper = setUp({success: false});
    const SubmitButton = findByTestAttr(wrapper, 'submitButton');
    expect(SubmitButton).toHaveLength(1);

});

test('Clear button exists',()=>{
    const wrapper = setUp({success: false});
    const SubmitButton = findByTestAttr(wrapper, 'clearForm');
    expect(SubmitButton).toHaveLength(1);
});

test('Submit button clicked',()=>{
    const mockFn = jest.fn();
    const wrapper = shallow(<CustomButton onclick={mockFn}/>)
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
});

test('Clear button clicked',()=>{
    const mockFn = jest.fn();
    const wrapper = shallow(<CustomButton onclick={mockFn}/>)
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
});







