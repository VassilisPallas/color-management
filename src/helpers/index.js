import React from 'react';

export const hexRegex = /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i;

export function renderField(field) {
    const {className, placeholder, type, label, meta: {touched, error}} = field;
    const divClassName = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
        <div className={divClassName}>

            {touched && error ? <label style={{marginBottom: 6}} className="text-danger">{error}</label> : ''}

            {label ? <label htmlFor={field.input.name} className="control-label">{label}</label> : ''}

            <input
                className={className}
                placeholder={placeholder}
                type={type}
                {...field.input}
            />
        </div>
    );
}