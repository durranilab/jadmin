import React from 'react';

const SecondaryButton = ({text, onClick}) => {
    return (
        <button className={'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none'}
                onClick={onClick}>
            {text}
        </button>
    );
};

export default SecondaryButton;
