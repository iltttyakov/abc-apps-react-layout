import React from 'react';
import cls from './PageActions.module.scss'

const PageActions = ({children}) => {
    return (
        <div className={cls.box}>
            {children}
        </div>
    );
};

export default PageActions;