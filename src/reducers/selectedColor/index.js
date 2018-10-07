import {actionTypes} from '../../actions/selectedColor';
import {actionTypes as colorActionTypes} from '../../actions/colors';

/**
 * @function selectedColorReducer
 * @param {Number} state - index of selected hex color
 * @param {object} action - action to be reduced
 * @returns {number} - selected color index
 */
export default (state = null, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECT_COLOR:
            return payload;
        case colorActionTypes.EDIT_COLOR:
            return null;
        default:
            return state;
    }
}