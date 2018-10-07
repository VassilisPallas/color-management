
export const actionTypes = {
    SELECT_COLOR: 'SELECT_COLOR'
};

/**
 * Returns actions creator object that dispatches `SELECT_COLOR` action
 * @function
 * @param {number} index - Color index
 * @returns {object} - action creator object
 */
export const selectColor = (index) => {
    return {
        type: actionTypes.SELECT_COLOR,
        payload: index
    }
};