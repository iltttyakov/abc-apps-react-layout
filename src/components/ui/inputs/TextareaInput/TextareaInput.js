import React, {useState} from 'react';
import cls from './TextareaInput.module.scss'
import makeId from "../../../../helpers/makeid";


const TextareaInput = (
    {
        name,
        register,
        errors = null,
        label = null,
        placeholder = null,
        className = null,
    }
) => {
    const id = makeId(5)
    const [onFocus, setOnFocus] = useState(false)

    return (
        <div
            className={[
                cls.box, className,
                onFocus ? cls.focus : null,
                errors ? cls.errors : null,
            ].join(' ')}
        >

            {
                label
                    ? <label className={cls.label} htmlFor={id}>{label}</label>
                    : null
            }
            <textarea
                id={id}
                placeholder={placeholder}
                {...register(name)}
                className={cls.field}
                name={name}
                onFocus={() => {
                    setOnFocus(true)
                }}
                onBlur={() => {
                    setOnFocus(false)
                }}
            />

            <span className={cls.errorText}>
                {errors[name]?.type === 'required' && 'Обязательное поле'}
                {errors[name] && errors[name].type === 'maxLength' && `Максимальная длина ${validation['maxLength']}`}
            </span>

        </div>
    )
};

export default TextareaInput;