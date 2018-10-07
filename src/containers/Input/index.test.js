import React from 'react';
import {shallow} from 'enzyme';
import {findById, findByName, storeFactory} from '../../../test/utils';

import Input, {Input as UnconnectedInput} from './';

/**
 * Factory function to create a shallow wrapper for the Input component.
 * @function setup
 * @param {object} initialState - Container state specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<Input store={store}/>).dive().dive().dive().dive();
};

describe('Input container', () => {

    describe('render', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setup();
        });

        it('renders without error', () => {
            const form = findById(wrapper, 'hex-form');
            expect(form.length).toBe(1);
        });
    });

    describe('redux properties', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setup();
        });

        it('`addColor` action creator should be a function on the props', () => {
            const editColorProps = wrapper.instance().props.addColor;
            expect(editColorProps).toBeInstanceOf(Function);
        });

        it('`editColor` action creator should be a function on the props', () => {
            const editColorProps = wrapper.instance().props.editColor;
            expect(editColorProps).toBeInstanceOf(Function);
        });
    });

});