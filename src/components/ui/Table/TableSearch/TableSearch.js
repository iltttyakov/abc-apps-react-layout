import React from 'react';
import cls from './TableSearch.module.scss'
import Icons from "../../Icons/Icons";


const TableSearch = (
    {
        register,
        name,
        onChange
    }
) => {
    return (
        <div className={cls.container}>
            <div className={cls.box}>
                <Icons className={cls.icon} name={'search'} size={16}/>
                <input
                    className={cls.field}
                    type={'text'}
                    name={name}
                    placeholder={'Поиск...'}
                    {...register(name, {
                        onChange: onChange
                    })}
                />
            </div>
        </div>
    );
};

export default TableSearch;