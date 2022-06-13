import React from 'react';
import cls from './Modal.module.scss'
import Icons from "../Icons/Icons";
import Loader from "../Loader/Loader";

export const ModalSizes = {
    SMALL: 'small',
    BIG: 'big'
}

const Modal = (
    {
        isOpen,
        title,
        onClose = () => null,
        size = ModalSizes.SMALL,
        isLoading = false,
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
        <>
            <div className={[cls.overlay, isOpen ? cls.open : null].join(' ')} onClick={closeHandler}></div>
            <div className={[cls.container, isOpen ? cls.open : null].join(' ')}>
                <div className={cls.inner}>
                    <div className={boxCls.join(' ')}>

                        <div className={cls.top}>
                            <p className={cls.title}>
                                {isLoading ? null : title}
                            </p>
                            <button className={cls.closeButton} onClick={closeHandler}>
                                <Icons size={30} className={cls.closeButtonIcon} name={'close'}/>
                            </button>
                        </div>

                        <div className={cls.body}>
                            <Loader process={isLoading}>
                                {children}
                            </Loader>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Modal;