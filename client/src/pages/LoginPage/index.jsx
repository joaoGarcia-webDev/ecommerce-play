import React, {useState} from "react";

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit',{login, password});
    };

    return (
        <div id="login">
            <h1 className="head-title">Login do Sistema</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="login">Login</label>
                    <input 
                        type="text" 
                        name="login" 
                        id="login" 
                        value={login} 
                        onChange={(e)=> setLogin(e.target.value)} 
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}  />
                </div>
                <div className="submit-btn btn">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
};

export default LoginPage;