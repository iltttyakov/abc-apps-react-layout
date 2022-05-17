import React from 'react';
import cls from './KeyValueFieldList.module.scss'
import Button, {ButtonTypes} from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const KeyValueFieldList = (
    {
        register,
        list,
        errors
    }
) => {
    const addRowClickHandler = () => {
        console.log('added new row')
    }

    return (
        <div className={cls.box}>

            <Button
                type={ButtonTypes.STROKE}
                className={cls.button}
                onClick={addRowClickHandler}
            >
                Добавить дополнительное поле
            </Button>

            <ul className={cls.list}>
                {
                    list
                        ? list.map((item, i) =>
                            <li className={cls.item} key={i}>
                                <TextInput
                                    name={item['key']}
                                    register={register}
                                    errors={errors}
                                    label={'Ключ'}
                                    className={cls.key}
                                />
                                <TextInput
                                    name={item['value']}
                                    register={register}
                                    errors={errors}
                                    label={'Значение'}
                                    className={cls.value}
                                />
                            </li>
                        )
                        : null
                }
                <li className={cls.item} key={'new'}>
                    <TextInput
                        name={'new-key-field'}
                        register={register}
                        errors={errors}
                        label={'Ключ'}
                        className={cls.key}
                    />
                    <TextInput
                        name={'new-value-field'}
                        register={register}
                        errors={errors}
                        label={'Значение'}
                        className={cls.value}
                    />
                </li>
            </ul>

        </div>
    );
};

export default KeyValueFieldList;