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
        style = {},
        onChange = () => null,
        disabled = false,
    }
) => {
    const id = makeId(5)

    return (
        <div
            style={style}
            className={
                [
                    cls.box,
                    disabled ? cls.disabled : null,
                ].join(' ')
            }
        >
            <input
                className={cls.field}
                type={'checkbox'}
                id={id}
                value={value}
                {...register(name, {
                    onChange: e => onChange(e),
                })}
            />
            <label
                className={[
                    cls.label,
                    reverse ? cls.reverse : null,
                    disabled ? cls.disabled : null,
                ].join(' ')}
                htmlFor={id}
                // style={style}
            >
                {
                    label
                        ? <span className={cls.text}>{label}</span>
                        : null
                }
            </label>
        </div>
    );
};

export default Checkbox;