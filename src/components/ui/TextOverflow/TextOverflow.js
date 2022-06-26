import React from 'react';
import cls from './TextOverflow.module.scss'

const TextOverflow = (
    {
        width,
        children
    }
) => {
    return (
        <span className={cls.box} style={{width: `${width}px`}}>
            {children}
        </span>
    );
};

export default TextOverflow;