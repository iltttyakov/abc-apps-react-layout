import React, {useEffect} from 'react';
import cls from './SelectInput.module.scss'
import {Controller} from "react-hook-form";
import Select from 'react-select';
import SelectMultiple from "react-select";
import {useSelector} from "react-redux";


const SelectInput = (
    {
        label,
        options,
        name,
        control,
        multiple = false,
        placeholder = '',
        validation,
        changeHandler = () => null,
        disabled = false,
    }
) => {
    const theme = useSelector(state => state.auth.theme)
    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: theme === 'night'
                ? '#392E6D'
                : '#ffffff',
            borderRadius: 5,
        }),
        control: () => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: 40,
            width: '100%',
            backgroundColor: 'transparent',
            border: '1px solid #BDBDBD',
            borderRadius: '8px',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        option: (provided, state) => ({
            color: theme === 'night'
                ? '#ffffff'
                : state.isSelected
                    ? '#ffffff'
                    : '#0D062D',
            backgroundColor: theme === 'night'
                ? state.isSelected
                    ? '#5030E5'
                    : state.isFocused
                        ? 'transparent'
                        : ''
                : state.isSelected
                    ? '#5030E5'
                    : state.isFocused
                        ? '#F7F6FD'
                        : 'transparent',
            padding: '1px 9px',
            fontSize: '13px',
            lineHeight: '24px',
            ':hover': {
                backgroundColor: '#F7F6FD',
                color: '#0D062D',
                cursor: 'pointer',
            },
            ':active': {
                backgroundColor: '#F7F6FD',
                color: '#0D062D',
                cursor: 'pointer',
            }
        }),
        multiValue: () => ({
            display: 'flex',
            flexDirection: 'row-revers',
            paddingLeft: 8,
            marginRight: 5,
            marginBottom: 5,
            alignItems: 'center',
            height: '28px',
            border: '1px solid #5030E5',
            borderRadius: '5px',
        }),
        multiValueLabel: () => ({
            fontSize: '13px',
            lineHeight: '16px',
            fontWeight: 500,
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: 'inherit',
        })
    }

    return (
        <div className={cls.container}>
            {
                label
                    ? <p className={cls.boxLabel}>{label}</p>
                    : null
            }

            <Controller
                name={name}
                control={control}
                rules={validation}
                render={(
                    {
                        field: {value, onChange, onBlur},
                        fieldState: {error}
                    }
                ) => (
                    <>
                        {
                            multiple
                                ? <SelectMultiple
                                    styles={customStyles}
                                    options={options}
                                    placeholder={placeholder}
                                    isMulti={true}
                                    onChange={(options) => {
                                        onChange(options?.map((option) => option.value))
                                        changeHandler()
                                    }}
                                    onBlur={onBlur}
                                    value={options.filter((option) => value?.includes(option.value))}
                                    defaultValue={options.filter((option) =>
                                        value?.includes(option.value)
                                    )}
                                    isDisabled={disabled}
                                />
                                : <Select
                                    styles={customStyles}
                                    options={options}
                                    placeholder={placeholder}
                                    allowClear={true}
                                    isMulti={false}
                                    onChange={option => {
                                        onChange(option.value)
                                        changeHandler(option.value)
                                    }}
                                    onBlur={onBlur}
                                    value={options.filter(option => option.value === value)}
                                    defaultValue={options.filter(option => option.value === value)}
                                    isDisabled={disabled}
                                />
                        }
                        {
                            error
                                ? <span className={cls.errorText}>
                                    {error?.type === 'required' && 'Обязательное поле'}
                                </span>
                                : null
                        }
                    </>
                )}
            />
        </div>
    );
};

export default SelectInput;