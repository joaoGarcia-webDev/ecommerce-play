import React,{useContext} from "react";
import {AuthContext} from "../../contexts/auth";

import "./custom.css";

const Page = () => {
    const {logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout();
    }
    return( 
        <div id="home-page">
            <div className="main-content">
                <header className="head-contents">
                    <h1 className="title">CRUD | E-CommercePlay</h1>
                    <button className="default" onClick={handleLogout}>Sair</button>
                </header>

                <nav className="crud-nav">
                    <h2 className="nav-title">Lista de produtos</h2>
                    <ul>
                        <li className="crud-list"><button className="default">Novo Produto</button></li>
                        <li className="crud-list"><button className="default delete">Excluir</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Page;