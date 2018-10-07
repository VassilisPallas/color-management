import {actionTypes} from '../../actions/colors';
import colorsReducer from '../colors';

describe('colors reducer', () => {

    describe('`ADD_COLOR` action', () => {

        it('returns default initial state of empty array when no action passed', () => {
            const newState = colorsReducer(undefined, {});
            expect(newState).toEqual([]);
        });

        it('returns state of array with the given hex upon receiving an action of type `ADD_COLOR`', () => {
            const hex = '#000000';
            const newState = colorsReducer(undefined, {type: actionTypes.ADD_COLOR, payload: hex});
            expect(newState).toEqual([hex]);
        });

    });

});