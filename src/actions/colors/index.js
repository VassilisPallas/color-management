
export const actionTypes = {
    ADD_COLOR: 'ADD_COLOR',
    EDIT_COLOR: 'EDIT_COLOR',
    DELETE_COLOR: 'DELETE_COLOR',
};

/**
 * Returns actions creator object that dispatches `ADD_COLOR` action
 * @function
 * @param {string} hex - Color hex
 * @returns {object} - action creator object
 */
export const addColor = (hex) => {
    return {
        type: actionTypes.ADD_COLOR,
        payload: hex
    }
};

/**
 * Returns actions creator object that dispatches `EDIT_COLOR` action
 * @function
 * @param {number} index - Index from array
 * @param {string} newColor - new color
 * @returns {object} - action creator object
 */
export const editColor = (index, newColor) => {
    return {
        type: actionTypes.EDIT_COLOR,
        payload: {index, newColor}
    }
};

/**
 * Returns actions creator object that dispatches `DELETE_COLOR` action
 * @function
 * @param {number} index - Index from array
 * @returns {object} - action creator object
 */
export const deleteColor = (index) => {
    return {
        type: actionTypes.DELETE_COLOR,
        payload: index
    }
};