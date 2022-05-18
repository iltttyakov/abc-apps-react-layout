import React from 'react';
import cls from './CheckIcon.module.scss'
import Icons from "../Icons/Icons";

const CheckIcon = ({check = true}) => {
    return (
        check
            ? <Icons name={'check'} size={24}/>
            : null
    );
};

export default CheckIcon;