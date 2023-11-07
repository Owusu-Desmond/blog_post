const RegisterPage = () => {
    return (
        <form className="form-register">
            <h1>Register</h1>
            <input type="text" className="form-control" placeholder="Username" required /><br />
            <input type="password" className="form-control" placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterPage;