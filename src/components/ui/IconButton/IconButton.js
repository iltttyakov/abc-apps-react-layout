import React from 'react';
import cls from './IconButton.module.scss'
import Icons from "../Icons/Icons";

const IconButton = (
    {
        iconName = null,
        iconSize = 24,
        onClick = null,
        className = ''
    }
) => {
    return (
        <button
            className={[cls.box, className].join(' ')}
            onClick={onClick}
        >
            <Icons
                className={cls.icon}
                name={iconName}
                size={iconSize}
            />
        </button>
    );
};

export default IconButton;