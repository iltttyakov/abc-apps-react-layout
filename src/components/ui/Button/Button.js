import React from 'react';
import cls from './Button.module.scss'

export const ButtonTypes = {
    FILL: 'fill',
    STROKE: 'stroke'
}

const Button = (
    {
        children,
        onClick,
        type = ButtonTypes.fill,
        className = null,
        shadow = false,
        buttonType = 'button'
    }
) => {
    const boxCls = [cls.box, className, shadow ? cls.shadow : null]

    switch (type) {
        case (ButtonTypes.FILL):
            boxCls.push(cls.fill)
            break
        case (ButtonTypes.STROKE):
            boxCls.push(cls.stroke)
            break
    }

    return (
        <button
            onClick={onClick}
            className={boxCls.join(' ')}
            type={buttonType}
        >
            {children}
        </button>
    );
};

export default Button;