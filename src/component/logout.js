import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () =>{
    localStorage.removeItem("token")
    if (!localStorage.getItem("token")) {
        return <Navigate to="/"/>
    }
    return(
        <div>
            Logout
        </div>
    )
}
export default Logout