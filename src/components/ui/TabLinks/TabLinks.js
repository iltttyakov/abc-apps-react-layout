import React from 'react';
import cls from "./TabLinks.module.scss";
import {NavLink} from "react-router-dom";
import Role from "../../containers/Role/Role";
import RoleFunc from "../../containers/Role/RoleFunc";
import inArray from "../../../helpers/inArray";


const TabLinks = (
    {
        options,
        className = null,
    }
) => {
    return (
        <div className={[cls.box, className].join(' ')}>
            <ul className={cls.list}>
                {
                    options.map((option, i) => {
                        return (
                            <RoleFunc
                                callback={rights => !inArray(rights, option['right'])}
                                key={i}
                            >
                                <li className={cls.item}>
                                    <NavLink
                                        className={cls.label}
                                        to={option['to']}
                                        activeClassName={cls.active}
                                    >
                                        {option['label']}
                                    </NavLink>
                                </li>
                            </RoleFunc>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default TabLinks;

// <Role accessTo={option['right'] ?? 'all'}>
// </Role>