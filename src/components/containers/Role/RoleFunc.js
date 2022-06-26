import React from 'react';
import {useSelector} from "react-redux";

const RoleFunc = ({callback = () => true, children}) => {
    const rights = useSelector(state => state.auth.rights)

    const isAvailable = () => {
        return callback(rights)
    }

    return isAvailable()
        ? children
        : null
};

export default RoleFunc;