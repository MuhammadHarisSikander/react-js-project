import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Admin = (props) =>{
    let token = localStorage.getItem("token")
    let loggedIn = true
    if (token == null) {
        loggedIn = false
    }
    switch (loggedIn) {
        case false:
            return <Navigate to="/" />
    }
    return(
        <div>
            <h1>Admin, You May Logout !!!! </h1>
            <Link to="/logout" >Logout</Link>
            <br/>
            <input type="submit" onClick={()=>{console.log(props)}} />
        </div>
    )
}
export default Admin 