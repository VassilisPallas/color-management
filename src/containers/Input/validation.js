import {hexRegex} from '../../helpers'

export function validateHex(values) {
    const errors = {};

    if (!hexRegex.test(values.hex)) {
        errors.hex = 'Hex is not valid';
    }

    if (!values.hex) {
        errors.hex = 'Hex is required.';
    }

    return errors;
}