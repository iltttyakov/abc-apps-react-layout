import React from 'react';
import TextInput from "../TextInput/TextInput";
import cls from './TimeInput.module.scss'
import Button, {ButtonTypes} from "../../Button/Button";
import moment from "moment";

const TimeInput = (
    {
        name,
        register,
        errors,
        label,
        setValue,
        required = true,
        disabled = false,
    }
) => {
    const todayClickHandler = () => {
        setValue(name, moment().format('HH:mm'))
    }

    const resetClickHandler = () => {
        setValue(name, null)
    }

    return (
        <div className={cls.box}>

            <TextInput
                label={label}
                register={register}
                errors={errors}
                name={name}
                inputType={'time'}
                placeholder={'__:__'}
                iconName={'clock'}
                className={cls.input}
                required={required}
                disabled={disabled}
            />

            <Button
                onClick={todayClickHandler}
                className={[cls.controls, cls.now].join(' ')}
                type={ButtonTypes.FILL}
                shadow={false}
                disabled={disabled}
            >
                Сейчас
            </Button>

            <Button
                onClick={resetClickHandler}
                className={[cls.controls, cls.reset].join(' ')}
                type={ButtonTypes.STROKE}
                shadow={false}
                disabled={disabled}
            >
                Сбросить
            </Button>


        </div>
    );
};

export default TimeInput;