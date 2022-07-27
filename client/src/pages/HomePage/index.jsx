import React,{useContext} from "react";
import {AuthContext} from "../../contexts/auth";

const Page = () => {
    const {authenticated, logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout();
    }
    return( 
        <>
        <h1>Page</h1>
        <p>{String(authenticated)}</p>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
};

export default Page;