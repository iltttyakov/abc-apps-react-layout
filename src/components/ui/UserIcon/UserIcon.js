import React from 'react';
import cls from './UserIcon.module.scss'

const UserIcon = () => {
    return (
        <div className={cls.box}>
            <span className={cls.initials}>
                AS
            </span>
        </div>
    );
};

export default UserIcon;