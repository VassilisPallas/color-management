import {combineReducers} from 'redux';

import colors from './colors';
import selectedColor from './selectedColor';

import {reducer as form} from 'redux-form';

export default combineReducers({
    colors,
    selectedColor,
    form
});