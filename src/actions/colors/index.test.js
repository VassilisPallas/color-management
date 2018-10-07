import {actionTypes, addColor, editColor, deleteColor} from './';

describe('addColor action creator', () => {

    it('returns an action with type `ADD_COLOR`', () => {
        const hex = '#000000';
        const action = addColor(hex);
        expect(action).toEqual({type: actionTypes.ADD_COLOR, payload: hex});
    });
});

describe('editColor action creator', () => {

    it('returns an action with type `ADD_COLOR`', () => {
        const index = 1;
        const newColor = "#ff0000"
        const action = editColor(index, newColor);
        expect(action).toEqual({type: actionTypes.EDIT_COLOR, payload: {index, newColor}});
    });
});

describe('delete action creator', () => {

    it('returns an action with type `DELETE_COLOR`', () => {
        const index = 1;
        const action = deleteColor(index);
        expect(action).toEqual({type: actionTypes.DELETE_COLOR, payload: index});
    });
});