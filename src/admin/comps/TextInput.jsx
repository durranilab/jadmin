import React from 'react';

const TextInput = ({id, name, type, value, onChange, placeholder, required = false}) => {
    return (
        <input
            className={'px-4 py-2 rounded bg-white border border-gray-300 text-indigo-800'}
            placeholder={placeholder}
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
};

export default TextInput;
