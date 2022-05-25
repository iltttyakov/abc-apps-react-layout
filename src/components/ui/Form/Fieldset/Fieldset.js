import React from 'react';
import cls from './Fieldset.module.scss'

const Fieldset = ({title = null, className = '', style = {}, children}) => {
    return (
        <fieldset className={[cls.box, className].join(' ')}>
            {title ? <p className={cls.legend}>{title}</p> : null}
            {children}
        </fieldset>
    )
};

export default Fieldset;