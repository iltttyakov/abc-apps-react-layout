import React, {forwardRef} from 'react';
import cls from './DateInput.module.scss'
import Button, {ButtonTypes} from "../../Button/Button";
import moment from "moment";
import {Controller} from 'react-hook-form'
import DatePicker from 'react-datepicker'
import TextInput from "../TextInput/TextInput";
import Icons from "../../Icons/Icons";
import ru from 'date-fns/locale/ru';


const DateInput = (
    {
        name,
        register,
        errors,
        label,
        setValue,
        required = true,
        disabled = false,
        control
    }
) => {
    const todayClickHandler = () => {
        setValue(name, moment().format('YYYY-MM-D'))
    }

    const resetClickHandler = () => {
        setValue(name, '')
    }

    const calendarChangeHandler = date => {
        setValue(name, moment(date).format('YYYY-MM-DD'))
    }

    const CalendarIcon = forwardRef(({value, onClick}, ref) => (
        <button
            onClick={onClick} ref={ref}
            className={cls.iconButton}
            type={'button'}
        >
            <Icons
                name={'calendar'}
                className={cls.icon}
                size={20}
            />
        </button>
    ));


    return (
        <div className={cls.box}>

            <div className={cls.container}>
                <TextInput
                    label={label}
                    register={register}
                    errors={errors}
                    name={name}
                    inputType={'date'}
                    placeholder={'дд.мм.гггг'}
                    className={cls.input}
                    required={required}
                    disabled={disabled}
                    onClick={event => event.preventDefault()}
                />

                <Controller
                    control={control}
                    name={name}
                    render={({field}) => {
                        return (
                            <DatePicker
                                placeholderText={'дд.мм.гггг'}
                                onChange={(date) => calendarChangeHandler(date)}
                                selected={field.value ? new Date(field.value) : null}
                                dateFormat={'dd.MM.yyyy'}
                                locale={ru}
                                customInput={<CalendarIcon/>}
                            />
                        )
                    }}
                />
            </div>

            <Button
                onClick={todayClickHandler}
                className={[cls.controls, cls.today].join(' ')}
                type={ButtonTypes.FILL}
                shadow={false}
                disabled={disabled}
            >
                Сегодня
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

export default DateInput;