import React from 'react';
import IconsSVG from './sprite.svg';

const Icons = ({name, size, className}) =>
    <svg className={className} width={size} height={size}>
        <use xlinkHref={`${IconsSVG}#${name}`}/>
    </svg>

export default Icons;