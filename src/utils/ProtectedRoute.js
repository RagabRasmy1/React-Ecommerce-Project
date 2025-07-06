import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const allPrivateComponent = children.filter(item => item !== ' ')
    const isAuth = useSelector(state => state.users.isAuth);
    if(!isAuth) {
        return <Navigate to="/login"   replace/>
    }
    return allPrivateComponent[0]
};
export default ProtectedRoute;