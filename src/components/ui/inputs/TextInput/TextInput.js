import React, {useState} from 'react';
import cls from './TextInput.module.scss'
import makeId from "../../../../helpers/makeid";
import Icons from "../../Icons/Icons";


export const TextInputSizes = {
    NORMAL: 'normal',
    BIG: 'big'
}


const TextInput = (
    {
        name,
        register,
        errors = null,
        label = null,
        inputType = 'text',
        placeholder = null,
        iconName = null,
        className = null,
        size = TextInputSizes.NORMAL,
        validation = {},
        disabled = false,
        counter = null,
        onChange = event => null,
        onClick = event => null,
    }
) => {
    const id = makeId(5)
    const [onFocus, setOnFocus] = useState(false)
    const [characterCounter, setCharacterCounter] = useState(counter)

    const changeHandler = e => {
        onChange(e)

        if (counter) {
            if (e.target.value.length > counter) {
                setCharacterCounter(0)
            } else {
                setCharacterCounter(counter - e.target.value.length)
            }
        }
    }

    return (
        <div
            className={[
                cls.box, className,
                onFocus ? cls.focus : null,
                errors[name] ? cls.errors : null,
                disabled ? cls.disabled : null,
                size === TextInputSizes.BIG ? cls.big : null,
            ].join(' ')}
        >
            {
                label
                    ? <label className={cls.label} htmlFor={id}>{label}</label>
                    : null
            }
            <div className={cls.fieldContainer}>
                <input
                    {
                        ...register(name, {
                            onChange: changeHandler,
                            ...validation,
                        })
                    }
                    className={cls.field}
                    type={inputType}
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    onFocus={() => {
                        setOnFocus(true)
                    }}
                    onBlur={() => {
                        setOnFocus(false)
                    }}
                    disabled={disabled}
                    onClick={onClick}
                />
                {
                    iconName
                        ? <Icons className={cls.icon} name={iconName} size={20}/>
                        : null
                }
                {
                    counter
                        ? <p className={cls.counter}>{characterCounter}</p>
                        : null
                }
            </div>
            {
                errors
                    ? <span className={cls.errorText}>
                        {errors[name]?.type === 'required' && 'Обязательное поле'}
                        {errors[name] && errors[name].type === 'maxLength' && `Максимальная длина ${validation['maxLength']}`}
                        {errors[name] && errors[name].type === 'minLength' && `Минимальная длина ${validation['minLength']}`}
                        {errors[name]?.type === 'custom' && errors[name].message}
                        {
                            errors[name] && errors[name].type === 'validate'
                            && `Пароль должен содержать от 8 до 32 символов без пробелов и русских букв, а также содержать цифру, заглавную и строчную букву`
                        }
                        {
                            errors[name] && errors[name].type === 'withoutSpaces'
                            && `Поле не должно содержать пробелы`
                        }
                    </span>
                    : null
            }
        </div>
    );
};

export default TextInput;