import React, {useState} from "react";

import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import {AuthContext} from "./contexts/auth";

const AppRoutes = () => {
    const [user, setUser] = useState(null);
    const login = (login, password) => {
        console.log('Login', {login, password});
        setUser({id: '123', login: 'teste@teste.com'})
    };
    const logout = () => {
        console.log('logout')
    };


    return(
        <Router>
            <AuthContext.Provider value={{authenticated: !!user, login}}>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </AuthContext.Provider>
        </Router>
    )
}

export default AppRoutes;