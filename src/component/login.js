import React,{ useState } from 'react'
import { Navigate } from 'react-router-dom'

function Login(){

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin] = useState(false)

    let onsubmitform=(e)=>{
        e.preventDefault()
        if(username === "A" && password === "B"){
            localStorage.setItem("token","1234567")
        }
     console.log("Password", password);
     setLogin(true)
    }


    if(localStorage.getItem("token")){
        return <Navigate to="/admin" />
    }

    return(
        <div>
            <h1>Please Login</h1>
            <form onSubmit={onsubmitform}>
            <input type="text" placeholder='UserName' onChange={(e)=>setUsername(e.target.value)} />
            <br/>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
            <br/>
            <input type="submit" placeholder='password' />
            </form>
        </div>
    )
}
export default Login