import React from 'react';
import {useSelector} from "react-redux";
import inArray from "../../../helpers/inArray";

const Role = ({accessTo = 'all', children}) => {
    const rights = useSelector(state => state.auth.rights)


    return accessTo === 'all'
        ? children
        : inArray(rights, accessTo) ? children : null
};

export default Role;