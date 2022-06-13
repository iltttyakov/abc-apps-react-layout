import React, {useState} from 'react';
import cls from './TableSortingButton.module.scss'
import makeId from "../../../../helpers/makeid";


export const SortTypes = {
    ASC: 'asc',
    DESC: 'desc'
}

const TableSortingButton = (
    {
        orderByName,
        value,
        orderName,
        label,
        register,
        setValue,
        getValues,
        onChange = null
    }
) => {
    const [labelCls, setLabelCls] = useState([cls.button])

    const sortTypeChangeHandler = () => {
        const order = getValues(orderName)
        const orderBy = getValues(orderByName)

        if (orderBy === value) {
            if (order === SortTypes.DESC) {
                setValue(orderName, SortTypes.ASC)
                setValue(orderByName, value)
                setLabelCls([cls.button, cls.asc])
            } else {
                setValue(orderName, null)
                setValue(orderByName, null)
                setLabelCls([cls.button])
            }
        } else {
            setValue(orderName, SortTypes.DESC)
            setValue(orderByName, value)
            setLabelCls([cls.button, cls.desc])
        }

        onChange()
    }

    const id = makeId(5)

    return (
        <>
            <input
                {...register(orderByName)}
                type={'radio'} className={cls.field}
                name={orderByName} value={value}
                id={id}
            />
            <button className={labelCls.join(' ')} onClick={sortTypeChangeHandler}>
                <span className={cls.label}>{label}</span>
                <svg
                    className={cls.icon} width="16" height="16" viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" stroke="none"
                >
                    <g className={cls.iconAsc}>
                        <path
                            d="M8.31295 4.97976C8.11769 5.17502 8.11769 5.4916 8.31295 5.68687C8.50821 5.88213 8.8248 5.88213 9.02006 5.68687L8.31295 4.97976ZM10.6665 3.33331L11.0201 2.97976C10.8248 2.7845 10.5082 2.7845 10.313 2.97976L10.6665 3.33331ZM12.313 5.68687C12.5082 5.88213 12.8248 5.88213 13.0201 5.68687C13.2153 5.4916 13.2153 5.17502 13.0201 4.97976L12.313 5.68687ZM9.02006 5.68687L11.0201 3.68687L10.313 2.97976L8.31295 4.97976L9.02006 5.68687ZM10.313 3.68687L12.313 5.68687L13.0201 4.97976L11.0201 2.97976L10.313 3.68687Z"/>
                        <path
                            d="M10.1665 12.6666C10.1665 12.9428 10.3904 13.1666 10.6665 13.1666C10.9426 13.1666 11.1665 12.9428 11.1665 12.6666L10.1665 12.6666ZM11.1665 3.33331C11.1665 3.05717 10.9426 2.83331 10.6665 2.83331C10.3904 2.83331 10.1665 3.05717 10.1665 3.33331L11.1665 3.33331ZM11.1665 12.6666L11.1665 3.33331L10.1665 3.33331L10.1665 12.6666L11.1665 12.6666Z"/>
                    </g>
                    <g className={cls.iconDesc}>
                        <path
                            d="M7.68705 11.0202C7.88231 10.825 7.88231 10.5084 7.68705 10.3131C7.49179 10.1179 7.17521 10.1179 6.97994 10.3131L7.68705 11.0202ZM5.3335 12.6667L4.97994 13.0202C5.1752 13.2155 5.49179 13.2155 5.68705 13.0202L5.3335 12.6667ZM3.68705 10.3131C3.49179 10.1179 3.1752 10.1179 2.97994 10.3131C2.78468 10.5084 2.78468 10.825 2.97994 11.0202L3.68705 10.3131ZM6.97994 10.3131L4.97994 12.3131L5.68705 13.0202L7.68705 11.0202L6.97994 10.3131ZM5.68705 12.3131L3.68705 10.3131L2.97994 11.0202L4.97994 13.0202L5.68705 12.3131Z"/>
                        <path
                            d="M5.8335 3.33331C5.8335 3.05717 5.60964 2.83331 5.3335 2.83331C5.05735 2.83331 4.8335 3.05717 4.8335 3.33331H5.8335ZM4.8335 12.6666C4.8335 12.9428 5.05735 13.1666 5.3335 13.1666C5.60964 13.1666 5.8335 12.9428 5.8335 12.6666H4.8335ZM4.8335 3.33331V12.6666H5.8335V3.33331H4.8335Z"/>
                    </g>
                </svg>
            </button>
        </>
    );
};

export default TableSortingButton;
