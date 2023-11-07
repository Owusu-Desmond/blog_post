const LoginPage = () => {
    return (
        <form className="form-login">
            <h1>Login</h1>
            <input type="text" className="form-control" placeholder="Username" required /><br />
            <input type="password" className="form-control" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginPage;