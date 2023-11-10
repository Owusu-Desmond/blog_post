import { useState } from "react";

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/register', {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {"Content-Type": 'application/json'}
        })

        if(response.status === 200) {
            alert("Registration Successfull")
        } else {
            alert("Registration fail")

        }
    }

    return (
        <form className="form-register" onSubmit={register}>
            <h1>Register</h1>
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
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterPage;