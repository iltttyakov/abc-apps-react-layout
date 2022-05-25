import React from 'react';
import cls from './CheckedTag.module.scss'
import makeId from "../../../../helpers/makeid";

const CheckedTag = (
    {
        name,
        label,
        value,
        register,
        type = 'radio'
    }
) => {
    const id = makeId(5)

    return (
        <>
            <input
                className={cls.field}
                name={name} id={id}
                value={value}
                {...register(name)}
                type={type}
            />
            <label
                className={cls.label}
                htmlFor={id}
            >
                {label}
            </label>
        </>
    );
};

export default CheckedTag;