import React from 'react';
import cls from './Checkbox.module.scss'
import makeId from "../../../../helpers/makeid";

const Checkbox = (
    {
        register,
        name,
        label = null,
        reverse = false,
        disable = false
    }
) => {
    const id = makeId(5)

    return (
        <>
            <input
                className={cls.field}
                type={'checkbox'} id={id}
                {...register(name)}
                disabled={disable}
            />
            <label className={[cls.label, reverse ? cls.reverse : null].join(' ')} htmlFor={id}>
                {
                    label
                        ? <span className={cls.text}>{label}</span>
                        : null
                }
            </label>
        </>
    );
};

export default Checkbox;