import React from 'react';
import cls from './Modal.module.scss'
import Icons from "../Icons/Icons";

export const ModalSizes = {
    SMALL: 'small',
    BIG: 'big'
}

const Modal = (
    {
        isOpen,
        title,
        onClose = () => {
        },
        size = ModalSizes.SMALL,
        children,
    }
) => {
    const closeHandler = () => {
        onClose()
    }

    const boxCls = [cls.box]
    switch (size) {
        case ModalSizes.BIG:
            boxCls.push(cls.big)
            break
        case ModalSizes.SMALL:
            boxCls.push(cls.small)
            break
    }

    return (
        <div className={[cls.container, isOpen ? cls.open : null].join(' ')}>
            <div className={cls.overlay} onClick={closeHandler}></div>

            <div className={cls.inner}>
                <div className={boxCls.join(' ')}>

                    <div className={cls.top}>
                        <p className={cls.title}>
                            {title}
                        </p>
                        <button className={cls.closeButton} onClick={closeHandler}>
                            <Icons size={30} className={cls.closeButtonIcon} name={'close'}/>
                        </button>
                    </div>

                    <div className={cls.body}>
                        {children}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Modal;