import React from 'react';

const MenuItems = ({icon, title, onClick, isActive}) => {
    return (
        <div
            className={isActive ? 'flex items-center gap-4 px-4 py-3 bg-gray-200 rounded-xl m-4 cursor-pointer text-indigo-800' : 'flex items-center gap-4 px-4 py-3 bg-gray-100 rounded-xl m-4 cursor-pointer text-indigo-800'}
            onClick={onClick}>
            <div className={'w-8 h-8'}>{icon}</div>
            <div>{title}</div>
        </div>
    );
};

export default MenuItems;
