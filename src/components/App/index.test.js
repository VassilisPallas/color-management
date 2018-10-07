import React from 'react';
import {shallow} from 'enzyme';

import {findByClass} from '../../../test/utils';

import {App} from './';

/**
 * @function
 * @param {object} state - State fro this setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
    return shallow(<App/>);
};

describe('App component', () => {

    describe('render', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup();
        })

        it('renders component without error', () => {
            const component = findByClass(wrapper, 'container');
            expect(component.length).toBe(1);
        })
    });
});