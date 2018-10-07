import {actionTypes} from '../../actions/colors';

/**
 * @function colorsReducer
 * @param {array} state - Array of colors
 * @param {object} action - action to be reduced
 * @returns {array} - new colors state
 */
export default (state = [], {type, payload}) => {
    switch (type) {
        case actionTypes.ADD_COLOR:
            return [...state, payload];
        case actionTypes.EDIT_COLOR:
            const newState = [...state];
            newState[payload.index] = payload.newColor;
            return newState;
        case actionTypes.DELETE_COLOR:
            return state.filter((hex, index) => index !== payload);
        default:
            return state;
    }
}