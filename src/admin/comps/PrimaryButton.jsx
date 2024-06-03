import React from 'react';

const PrimaryButton = ({text, onClick}) => {
    return (
        <button className={'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none'}
                onClick={onClick}>
            {text}
        </button>
    );
};

export default PrimaryButton;
