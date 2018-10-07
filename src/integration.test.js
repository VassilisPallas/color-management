import {storeFactory} from '../test/utils'
import {addColor, deleteColor, editColor} from './actions/colors';
import {selectColor} from './actions/selectedColor';

describe('addColor action dispatcher', () => {

    describe('has no colors', () => {
        const hex = '#fff';
        const colors = [hex];

        let store;
        const initialState = {};

        beforeEach(() => {
            store = storeFactory(initialState);
        });

        it('new should contain the selectedColor key after action dispatched', () => {
            store.dispatch(addColor(hex));

            const newState = store.getState().colors;
            const expectedState = {
                colors
            };

            expect(newState).toEqual(expectedState.colors);
        });
    });

});

describe('editColor action dispatcher', () => {

    const colors = ['#fff', '#000'];
    const selectedColor = 1;
    const newColor = '#ff0000';

    let store;
    const initialState = {colors};

    beforeEach(() => {
        store = storeFactory(initialState);
    });

    it('should edit the selectedColor after action dispatched', () => {
        store.dispatch(editColor(selectedColor, newColor));

        const newState = store.getState().colors;
        const expectedState = {
            colors: ['#fff', newColor]
        };

        expect(newState).toEqual(expectedState.colors);
    });

});

describe('deleteColor action dispatcher', () => {

    const colors = ['#fff', '#000'];
    const selectedColor = 1;

    let store;
    const initialState = {colors};

    beforeEach(() => {
        store = storeFactory(initialState);
    });

    it('should delete the selectedColor after action dispatched', () => {
        store.dispatch(deleteColor(selectedColor));

        const newState = store.getState().colors;
        const expectedState = {
            colors: ['#fff']
        };

        expect(newState).toEqual(expectedState.colors);
    });

});

describe('selectColor action dispatcher', () => {

    const colors = ['#fff', '#000'];
    const selectedColor = 1;

    let store;
    const initialState = {colors};

    beforeEach(() => {
        store = storeFactory(initialState);
    });

    it('should delete the selectedColor after action dispatched', () => {
        store.dispatch(selectColor(selectedColor));

        const newState = store.getState().selectedColor;
        const expectedState = {
            selectedColor
        };

        expect(newState).toEqual(expectedState.selectedColor);
    });

});