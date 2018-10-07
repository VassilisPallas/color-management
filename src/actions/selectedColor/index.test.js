import {actionTypes, selectColor} from './';

describe('selected action creator', () => {

    it('returns an action with type `SELECT_COLOR`', () => {
        const index = 1;
        const action = selectColor(index);
        expect(action).toEqual({type: actionTypes.SELECT_COLOR, payload: index});
    });
});