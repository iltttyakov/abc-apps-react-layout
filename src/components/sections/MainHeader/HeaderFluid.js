import React from 'react';
import cls from "./MainHeader.module.scss";
import ThemeSwitch from "../../ui/ThemeSwitch/ThemeSwitch";
import UserIcon from "../../ui/UserIcon/UserIcon";
import Logo from "../../ui/Logo/Logo";
import Container from "../../wrappers/Container/Container";

const HeaderFluid = () => {
    return (
        <div className={[cls.box, cls.fluid].join(' ')}>

            <Container className={cls.container}>
                <div className={cls.logo}>
                    <Logo/>
                </div>

                <div className={cls.themeSwitch}>
                    <ThemeSwitch/>
                </div>

                <UserIcon/>
            </Container>

        </div>
    );
};

export default HeaderFluid;