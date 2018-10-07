import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {renderField} from "../../helpers";
import {validateHex as validate} from "./validation";

import state from './state';
import dispatch from './dispatch';

import './Input.css'

export class Input extends Component {

    /**
     * @constructor
     * @param {object} props - Component props.
     * @returns {undefined}
     */
    constructor(props) {
        super(props);

        this._submitHex = this._submitHex.bind(this);
    }

    /**
     * Submit the hex to action creator
     * @method
     * @param {object} values - Form values
     * @returns null
     */
    _submitHex({hex}) {

        const {selectedColor, addColor, editColor, reset} = this.props;

        if (selectedColor !== null) {
            editColor(selectedColor, hex);
        } else {
            addColor(hex);
        }

        reset();
    }

    /**
     * Render the component
     * @method
     * @returns {JSX.Element} - Renders component
     */
    render() {
        const {handleSubmit, selectedColor} = this.props;

        return (
            <form onSubmit={handleSubmit(this._submitHex)} id="hex-form" className="form-inline form-space">

                <Field
                    placeholder="Add hex"
                    component={renderField}
                    name="hex"
                    className="mb-2 mx-sm-3 form-control"
                    type="text"
                />

                <button
                    data-test="submit-button"
                    type="submit"
                    className="btn btn-primary mb-2">
                    {selectedColor !== null ? 'Edit' : 'Add'}
                </button>
            </form>
        );
    }
}

const reduxFormOptions = {
    validate,
    form: 'HexForm',
    enableReinitialize : true
};

Input = reduxForm(reduxFormOptions)(Input);
Input = connect(state, dispatch)(Input);

export default Input;