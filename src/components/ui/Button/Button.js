import React from 'react';
import cls from './Button.module.scss'
import {NavLink} from "react-router-dom";

export const ButtonTypes = {
    FILL: 'fill',
    STROKE: 'stroke'
}

export const ButtonSizes = {
    NORMAL: 'noraml', SMALL: 'small', BIG: 'big'
}

const Button = (
    {
        children,
        onClick = null,
        to = null,
        type = ButtonTypes.FILL,
        size = ButtonSizes.NORMAL,
        className = null,
        shadow = false,
        buttonType = 'button'
    }
) => {
    const boxCls = [
        cls.box,
        className,
        shadow ? cls.shadow : null,
    ]

    switch (type) {
        case (ButtonTypes.FILL):
            boxCls.push(cls.fill)
            break
        case (ButtonTypes.STROKE):
            boxCls.push(cls.stroke)
            break
    }

    switch (size) {
        case (ButtonSizes.SMALL):
            boxCls.push(cls.small)
            break
        case (ButtonSizes.BIG):
            boxCls.push(cls.big)
            break
    }


    if (to) {
        return (
            <NavLink
                className={boxCls.join(' ')}
                to={to}
            >
                {children}
            </NavLink>
        )
    }

    return (
        <button
            onClick={onClick}
            className={boxCls.join(' ')}
            type={buttonType}
        >
            {children}
        </button>
    )
};

export default Button;