import React from 'react';
import TextInput from "../../TextInput/TextInput";
import cls from './DateInput.module.scss'
import Button, {ButtonTypes} from "../../Button/Button";
import moment from "moment";

const DateInput = (
    {
        name,
        register,
        errors,
        label,
        setValue,
        required = true
    }
) => {
    const todayClickHandler = () => {
        setValue(name, moment().format('YYYY-MM-D'))
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
                inputType={'date'}
                placeholder={'дд.мм.гггг'}
                iconName={'calendar'}
                className={cls.input}
                required={required}
            />

            <Button
                onClick={todayClickHandler}
                className={[cls.controls, cls.today].join(' ')}
                type={ButtonTypes.FILL}
            >
                Сегодня
            </Button>

            <Button
                onClick={resetClickHandler}
                className={[cls.controls, cls.reset].join(' ')}
                type={ButtonTypes.STROKE}
            >
                Сбросить
            </Button>


        </div>
    );
};

export default DateInput;