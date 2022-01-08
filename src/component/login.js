import React,{ useState } from 'react'
import { Navigate } from 'react-router-dom'

function Login(){

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin] = useState(false)


     
           let onsubmitform=(e)=>{
            e.preventDefault()
            setTimeout(()=>{
                if(username === "A" && password === "B"){
                    localStorage.setItem("token","1234567")
                }
             console.log("Password", password);
             setLogin(true)
            },9000)


                
            }
  



    if(localStorage.getItem("token")){
        return <Navigate to="/admin" />
    }

    return(
        <div style={{justifyContent:"center",display:'flex',flex:1,height:'100vh',alignItems:'center',backgroundImage:`url("https://kredo.jp/wp/wp-content/uploads/2019/02/ai-artificial-intelligence-code-34676-1.jpg")`}} >
            <div style={{display:'block',textAlign:'center'}}>
            <h1>Please Login</h1>
            <form onSubmit={onsubmitform} >
            <input type="text" placeholder='User Name' onChange={(e)=>setUsername(e.target.value)} style={{padding:'10px'}} />
            <br/>
            <br/>
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}style={{padding:'10px'}} />
            <br/>
            <br/>
            <input type="submit" placeholder='password' />
            </form>
            </div>
        </div>
    )
}
export default Login