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
        validation = {},
        counter = null,
        disabled = false
    }
) => {
    const id = makeId(5)
    const [onFocus, setOnFocus] = useState(false)
    const [characterCounter, setCharacterCounter] = useState(counter)

    const changeHandler = e => {
        if (e.target.value.length > counter) {
            setCharacterCounter(0)
        } else {
            setCharacterCounter(counter - e.target.value.length)
        }
    }


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
            <div className={cls.container}>

                <textarea
                    id={id}
                    placeholder={placeholder}
                    {...register(name, {
                        ...validation,
                        onChange: counter ? changeHandler : () => null
                    })}
                    className={cls.field}
                    name={name}
                    onFocus={() => {
                        setOnFocus(true)
                    }}
                    onBlur={() => {
                        setOnFocus(false)
                    }}
                    disabled={disabled}
                />
                {
                    counter
                        ? <p className={cls.counter}>{characterCounter}</p>
                        : null
                }
            </div>

            <span className={cls.errorText}>
                {errors[name]?.type === 'required' && 'Обязательное поле'}
                {errors[name] && errors[name].type === 'maxLength' && `Максимальная длина ${validation['maxLength']}`}
            </span>

        </div>
    )
};

export default TextareaInput;