import React from 'react';
import cls from './RadioButton.module.scss'
import makeId from "../../../../helpers/makeid";

const RadioButton = (
    {
        name,
        label,
        value,
        register,
        validation
    }
) => {
    const id = makeId(5)

    return (
        <div className={cls.box}>
            <input
                className={cls.field}
                type={'radio'}
                name={name}
                id={id}
                value={value}
                {...register(name, {
                    ...validation
                })}
            />
            <label
                id={id}
                className={cls.label}
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};

export default RadioButton;