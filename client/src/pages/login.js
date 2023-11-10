import { useContext, useState } from "react";
import { Navigate } from "react-router-dom"
import { UserContext } from "../userContext";

const LoginPage = () => {
    const { setUserInfo } = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    const login = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/login', {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {"Content-Type": 'application/json'},
            credentials: 'include'
        })

        if(response.ok) {
            const user = await response.json()
            setUserInfo(user)
            setRedirect(true)
        } 
    }

    if (redirect) {
        return <Navigate to="/"/>
    }

    return (
        <form className="form-register" onSubmit={login}>
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                required /><br />
            <input 
                type="password"
                placeholder="Password" 
                onChange={e => setPassword(e.target.value)}
                required />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginPage;