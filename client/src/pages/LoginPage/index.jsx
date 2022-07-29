import React, {useState, useContext} from "react";
import {AuthContext} from "../../contexts/auth";

import "./custom.css";

const LoginPage = () => {
    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit',{email, password});

        login(email, password);
    };

    return (
        <div id="login">
            <div className="login-content">
                <h1 className="head-title">Acesse o sistema</h1>
                <p className="login-text">Esta é uma página de administrador. Efetue o login para ter acesso ao sistema.</p>
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label className="" id="emailLabel" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)}
                            onFocus={() => {
                                document.getElementById('emailLabel').classList.add('focused');
                            }}
                            onBlur={() => {
                                if (document.getElementById('email').value == '') {
                                    document.getElementById('emailLabel').classList.remove('focused');
                                }
                            }}
                        />
                    </div>
                    <div className="input-field">
                        <label className="" id="passLabel" htmlFor="password">Senha</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)}
                            onFocus={() => {
                                document.getElementById('passLabel').classList.add('focused');
                            }}
                            onBlur={() => {
                                if (document.getElementById('password').value == '') {
                                    document.getElementById('passLabel').classList.remove('focused');
                                }
                            }}
                        />
                    </div>
                    <div className="submit-btn btn">
                        <button type="submit">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default LoginPage;