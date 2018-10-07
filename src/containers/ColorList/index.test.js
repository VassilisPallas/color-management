import React from 'react';
import {shallow} from 'enzyme';
import {findByClass, findById, storeFactory} from '../../../test/utils';

import ColorList, {ColorList as UnConnectedColorList} from './';

/**
 * Factory function to create a shallow wrapper for the ColorList component.
 * @function setup
 * @param {object} initialState - Container state specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<ColorList store={store}/>).dive();
};

describe('ColorList container', () => {

    describe('redux properties', () => {
        it('redux has access to `colors` state', () => {
            const colors = [];
            const wrapper = setup({colors});

            const colorsProp = wrapper.instance().props.colors;
            expect(colorsProp).toEqual(colors);
            expect(colorsProp).toBeInstanceOf(Array);
        });

        it('`selectColor` action creator should be a function on the props', () => {
            const wrapper = setup();
            const selectColorProps = wrapper.instance().props.selectColor;
            expect(selectColorProps).toBeInstanceOf(Function);
        });

        it('deleteColor` action creator should be a function on the props', () => {
            const wrapper = setup();
            const deleteColorProps = wrapper.instance().props.deleteColor;
            expect(deleteColorProps).toBeInstanceOf(Function);
        });
    });

    describe('if there are no colors', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setup({colors: []});
        });

        it('renders without error', () => {
            const component = findByClass(wrapper, 'color-list');
            expect(component.length).toBe(1);
        });

        it('renders message to add hex', () => {
            const message = findById(wrapper, 'empty-colors-message');
            expect(message.length).toBe(1);
        });
    });

    describe('if there colors', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setup({colors: ['#000000']});
        });

        it('renders without error', () => {
            const component = findByClass(wrapper, 'color-list');
            expect(component.length).toBe(1);
        });

        it('correct number of hex colors', () => {
            const tableDiv = findById(wrapper, 'colors');
            expect(tableDiv.length).toBe(1);
        });
    });

    describe('`deleteColor` action creator call', () => {

        let deleteColorMock;
        let wrapper;

        beforeEach(() => {
            deleteColorMock = jest.fn();

            const props = {colors: ['#fff', '#000'], deleteColor: deleteColorMock};
            wrapper = shallow(<UnConnectedColorList {...props}/>);

            const button = findByClass(wrapper, 'delete-button').first();
            button.simulate('click');
        });

        it('should call `deleteColor` when button is clicked', () => {
            const deleteColorCallCount = deleteColorMock.mock.calls.length;
            expect(deleteColorCallCount).toBe(1);
        });

        it('`deleteColor` was called with 0 as argument', () => {
            const deleteColorArg = deleteColorMock.mock.calls[0][0];
            expect(deleteColorArg).toBe(0);
        });

    });

    describe('`selectColor` action creator call', () => {

        let selectColorMock;
        let wrapper;

        beforeEach(() => {
            selectColorMock = jest.fn();

            const props = {colors: ['#fff', '#000'], selectColor: selectColorMock};
            wrapper = shallow(<UnConnectedColorList {...props}/>);

            const button = findByClass(wrapper, 'edit-button').first();
            button.simulate('click');
        });

        it('should call `selectColor` when button is clicked', () => {
            const selectColorCallCount = selectColorMock.mock.calls.length;
            expect(selectColorCallCount).toBe(1);
        });

        it('`selectColor` was called with 0 as argument', () => {
            const selectColorArg = selectColorMock.mock.calls[0][0];
            expect(selectColorArg).toBe(0);
        });

    });

});