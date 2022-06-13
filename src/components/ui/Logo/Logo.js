import React from 'react';
import cls from './Logo.module.scss'
import {NavLink} from "react-router-dom";
import paths from "../../paths";
import {useLocation} from "react-router";

import logoWhite from './logo_gr_dark_back.png'
import logoBlack from './logo_gr_light_back.png'


const Logo = () => {
    const location = useLocation()

    return (
        <div className={[
            cls.box,
            location.pathname !== '/' ? cls.withLink : null
        ].join(' ')}>
            <img
                className={[cls.image, cls.black].join(' ')}
                src={logoBlack}
                width={64} height={64}
                alt={'Логотип'}
            />
            <img
                className={[cls.image, cls.white].join(' ')}
                src={logoWhite}
                width={64} height={64}
                alt={'Логотип'}
            />
            <NavLink to={paths.BoardPage} className={cls.link}/>
        </div>
    );
};

export default Logo;