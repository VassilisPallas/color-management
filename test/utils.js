import {createStore} from 'redux';

import reducer from '../src/reducers';

/**
 * Return ShallowWrapper containing node with the given id value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} id - Value of id attribute for search.
 * @returns {ShallowWrapper}
 */
export const findById = (wrapper, id) => {
    return wrapper.find(`#${id}`);
};

/**
 * Return ShallowWrapper containing node(s) with the given name value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} name - Value of name attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByName = (wrapper, name) => {
    return wrapper.find(`[name="${name}"]`);
};

/**
 * Return ShallowWrapper containing node(s) with the given class value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of class attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByClass = (wrapper, val) => {
    return wrapper.find(`.${val}`);
};

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer
 *  @function
 *  @param {object} initialState - Initial state for store
 *  @returns {Store} - Redux store
 */
export const storeFactory = (initialState = {}) => {
    return (createStore)(reducer, initialState);
};