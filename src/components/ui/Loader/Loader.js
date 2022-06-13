import React from 'react';
import cls from './Loader.module.scss'

const Loader = ({process, className = null, children = null}) => {
    return (
        process
            ? <div className={[cls.container, className].join(' ')}>
                <div className={cls.ripple}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            : children
    );
};

export default Loader;