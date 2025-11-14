import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="login-container">
            <h1> Login Page</h1>
            <form className="login-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
