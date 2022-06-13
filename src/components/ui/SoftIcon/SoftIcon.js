import React from 'react';
import cls from './SoftIcon.module.scss'

import dolphinIcon from './icons/dolphin.png'
import octobrowserIcon from './icons/octobrowser.png'
import incognitionIcon from './icons/incognition.png'
import multiloginIcon from './icons/multilogin.png'

const soft = {
    dolphin: 'dolphin',
    octobrowser: 'octobrowser',
    incognition: 'incognition',
    multilogin: 'multilogin',
}

const softIcons = {}
softIcons[soft.dolphin] = dolphinIcon
softIcons[soft.octobrowser] = octobrowserIcon
softIcons[soft.incognition] = incognitionIcon
softIcons[soft.multilogin] = multiloginIcon


const SoftIcon = ({soft, className, size = 26}) => {
    return (
        <img
            className={[cls.image, className].join(' ')}
            src={softIcons[soft]}
            width={size} height={size} alt={soft}
        />
    );
};

export default SoftIcon;