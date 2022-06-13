import React from 'react';
import cls from './DomainCheckInput.module.scss'
import TextInput from "../TextInput/TextInput";
import Button, {ButtonTypes} from "../../Button/Button";

const DomainCheckInput = (
    {
        name,
        register,
        errors,
        required,
        label,
        onCheck,
        disabled = false
    }
) => {
    return (
        <div className={cls.box}>

            <TextInput
                name={name}
                register={register}
                errors={errors}
                required={required}
                label={label}
                className={cls.field}
                disabled={disabled}
            />

            <Button
                type={ButtonTypes.FILL}
                onClick={onCheck}
                className={cls.button}
                shadow={false}
            >
                Проверить домен
            </Button>

        </div>
    );
};

export default DomainCheckInput;