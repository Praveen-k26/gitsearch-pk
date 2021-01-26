import {findByTestAttr} from "../../../test/testUtils";
import {shallow} from "enzyme";
import React from "react";
import Card from "./card.component";

const defaultProps = {success: false}


const setUp = (props= {}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<Card {...setUpProps}/>)
}



test('Card exists',()=>{
    const wrapper = setUp({success: false});
    const CardWrapper = findByTestAttr(wrapper, 'card-wrapper');
    expect(CardWrapper).toHaveLength(1);
});

