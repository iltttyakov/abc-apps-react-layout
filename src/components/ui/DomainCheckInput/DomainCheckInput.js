import React from 'react';
import cls from './DomainCheckInput.module.scss'
import TextInput from "../TextInput/TextInput";
import Button, {ButtonTypes} from "../Button/Button";

const DomainCheckInput = (
    {
        name,
        register,
        errors,
        required,
        label,
    }
) => {
    const checkDomainClickHandler = () => {
        console.log('check domain')
    }

    return (
        <div className={cls.box}>

            <TextInput
                name={name}
                register={register}
                errors={errors}
                required={required}
                label={label}
                className={cls.field}
            />

            <Button
                type={ButtonTypes.FILL}
                onClick={checkDomainClickHandler}
                className={cls.button}
            >
                Проверить домен
            </Button>

        </div>
    );
};

export default DomainCheckInput;