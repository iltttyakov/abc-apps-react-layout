import React from 'react';
import cls from './Loader.module.scss'

const Loader = ({process, children}) => {
    return (
        process
            ? <div className={cls.container}>
                <div className={cls.ripple}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            : children
    );
};

export default Loader;