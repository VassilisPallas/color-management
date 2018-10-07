import {actionTypes} from '../../actions/selectedColor';
import selectedColorsReducer from '../selectedColor';

describe('colors reducer', () => {

    describe('`SELECT_COLOR` action', () => {

        it('returns default initial state of null when no action passed', () => {
            const newState = selectedColorsReducer(undefined, {});
            expect(newState).toBeNull();
        });

        it('returns state of index upon receiving an action of type `SELECT_COLOR`', () => {
            const index = 1;
            const newState = selectedColorsReducer(undefined, {type: actionTypes.SELECT_COLOR, payload: index});
            expect(newState).toEqual(index);
        });

    });

});