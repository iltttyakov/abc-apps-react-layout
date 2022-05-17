import React, {useEffect, useRef, useState} from 'react';
import cls from './ToggleElement.module.scss'


const ToggleElement = (
    {
        isOpen = false,
        className = '',
        children,
    }
) => {
    let [maxHeight, setMaxHeight] = useState(0)
    const boxRef = useRef()

    useEffect(() => {
        if (boxRef) {
            if (isOpen) setMaxHeight(`${boxRef.current.scrollHeight}px`)
            else setMaxHeight(`0px`)
        }
    }, [isOpen])

    return (
        <div className={[cls.box, className].join(' ')} style={{maxHeight}} ref={boxRef}>
            {children}
        </div>
    );
};

export default ToggleElement;