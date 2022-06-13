import React from 'react';
import cls from './Checkbox.module.scss'
import makeId from "../../../../helpers/makeid";

const Checkbox = (
    {
        register,
        name,
        value,
        label = null,
        reverse = false,
        disable = false,
        style = {},
        onChange = () => null
    }
) => {
    const id = makeId(5)

    return (
        <>
            <input
                className={cls.field}
                type={'checkbox'} id={id}
                value={value}
                {...register(name, {
                    onChange: e => onChange(e)
                })}
                disabled={disable}
            />
            <label className={[cls.label, reverse ? cls.reverse : null].join(' ')} htmlFor={id} style={style}>
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