import React, {useEffect} from 'react';
import cls from './KeyValueInputList.module.scss'
import Button, {ButtonTypes} from "../../Button/Button";
import TextInput from "../TextInput/TextInput";
import {useFieldArray, useForm} from "react-hook-form";


const KeyValueInputList = (
    {
        register,
        errors,
        control,
        name,
        disabled = false,
        onChange = event => null,
    }
) => {
    const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
        control,
        name: name,
    })

    const addRowClickHandler = () => {
        append({key: '', val: ''})
    }

    const deleteRow = rowIndex => {
        remove(rowIndex)
    }


    return (
        <div className={cls.box}>
            {
                disabled
                    ? null
                    : <Button
                        buttonType={'button'}
                        type={ButtonTypes.STROKE}
                        className={cls.button}
                        onClick={addRowClickHandler}
                        shadow={false}
                        disabled={disabled}
                    >
                        Добавить дополнительное поле
                    </Button>
            }


            <ul className={cls.list}>
                {
                    fields.map((field, index) => (
                        <li className={cls.item} key={index}>
                            <TextInput
                                className={cls.field}
                                name={`${name}.${index}.key`}
                                register={register}
                                errors={errors}
                                label={'Ключ'}
                                disabled={disabled}
                                onChange={onChange}
                            />
                            <TextInput
                                className={cls.field}
                                name={`${name}.${index}.val`}
                                register={register}
                                errors={errors}
                                label={'Значение'}
                                disabled={disabled}
                                onChange={onChange}
                            />
                            {
                                disabled
                                    ? null
                                    : <Button
                                        className={cls.delete}
                                        buttonType={'button'}
                                        type={ButtonTypes.STROKE}
                                        shadow={false}
                                        onClick={() => {
                                            deleteRow(index)
                                        }}
                                    >
                                        Удалить
                                    </Button>
                            }
                        </li>
                    ))
                }
            </ul>

            <span className={cls.errorText}>
                {errors[name]?.type === 'custom' && errors[name].message}
            </span>
        </div>
    );
};

export default KeyValueInputList;