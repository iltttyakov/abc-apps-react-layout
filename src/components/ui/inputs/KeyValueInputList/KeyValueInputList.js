import React from 'react';
import cls from './KeyValueInputList.module.scss'
import Button, {ButtonTypes} from "../../Button/Button";
import TextInput from "../TextInput/TextInput";


const KeyValueInputRow = (
    {
        itemKey,
        itemValue,
        errors,
        register
    }
) => {
    return (
        <li className={cls.item}>
            <div className={[cls.field, cls.key].join(' ')}>
                <TextInput
                    name={itemKey}
                    register={register}
                    label={'Ключ'}
                />
            </div>
            <div className={[cls.field, cls.value].join(' ')}>
                <TextInput
                    name={`value-${itemValue}`}
                    register={register}
                    label={'Значение'}
                />
            </div>
        </li>
    )
}


const KeyValueInputList = (
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
                            <KeyValueInputRow
                                key={i}
                                itemKey={item['key']}
                                itemValue={item['value']}
                                register={register}
                                errors={errors}
                            />
                        )
                        : null
                }
                <KeyValueInputRow
                    key={'new'}
                    itemKey={'new-key'}
                    itemValue={''}
                    register={register}
                    errors={errors}
                />
            </ul>

        </div>
    );
};

export default KeyValueInputList;