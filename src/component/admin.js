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
        <div style={{border:"1px solid",flex:1,display:'flex',height:'98vh'}} >
            <div style={{border:'1px solid',position:'relative',}}>
            <h3>Admin, You May Logout !!!! </h3>
           
                <div style={{flex:1,border:'1px solid',display:'flex'}} >

            <Link style={{flex:1,border:'1px solid',justifyContent:'flex-end',display:'flex',height:'91vh'}} to="/logout" >Logout</Link>
                </div>
           
            {/* <br/> */}
            {/* <input type="submit" onClick={()=>{console.log(props)}} /> */}
            </div>
            
        </div>
    )
}
export default Admin 