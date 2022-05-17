import React, {useState} from 'react';
import cls from './Toggle.module.scss'
import makeId from "../../../helpers/makeid";

const Toggle = (
    {
        name = '',
        checked = false,
        className = '',
        onChange = () => {
        },
    }
) => {
    const id = makeId(5)

    return (
        <div className={[cls.box, className].join(' ')}>
            <input
                type={'checkbox'} className={cls.field}
                name={name} id={id} checked={checked}
                onChange={onChange}
            />
            <label className={cls.label} htmlFor={id}/>
        </div>
    );
};

export default Toggle;