import React from 'react';
import cls from './AppName.module.scss'

const AppName = (
    {
        name,
        icon = null,
        className = ''
    }
) => {
    return (
        <div className={cls.box}>
            {
                icon
                    ? <img className={cls.icon} src={icon} width={26} height={26} alt={`Иконка приложения ${name}`}/>
                    : null
            }

            <span className={cls.name}>
                {name}
            </span>
        </div>
    );
};

export default AppName;