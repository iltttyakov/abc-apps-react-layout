import React from 'react';
import cls from './TextPage.module.scss'

const TextPage = ({text}) => {
    return (
        <div className={cls.box}>
            {text}
        </div>
    );
};

export default TextPage;