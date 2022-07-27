import React, {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate(null);
    const [user, setUser] = useState(null)

    const login = (email, password) => {

        console.log("login auth", {email, password});
        if(password === "123"){
            setUser({id:"123", login});
            navigate("/");
        }
    }
    const logout = () => {
        console.log("logout");
    };

    return (
        <AuthContext.Provider value={{authenticated: !!user, login, logout}} >
            {children}
        </AuthContext.Provider>
    );
};