import React from 'react';
import cls from "./Header.module.scss";
import ThemeSwitch from "../../containers/ThemeSwitch/ThemeSwitch";
import UserIcon from "../../containers/UserIcon/UserIcon";
import Logo from "../../ui/Logo/Logo";
import Container from "../../ui/Container/Container";

const HeaderFluid = () => {
    return (
        <header className={[cls.box, cls.fluid].join(' ')}>

            <Container className={cls.container}>
                <div className={cls.logo}>
                    <Logo/>
                </div>

                <div className={cls.right}>
                    <div className={cls.themeSwitch}>
                        <ThemeSwitch/>
                    </div>

                    <UserIcon/>
                </div>
            </Container>

        </header>
    );
};

export default HeaderFluid;