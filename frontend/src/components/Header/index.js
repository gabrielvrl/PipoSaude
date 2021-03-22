import React from 'react';
import { useHistory } from "react-router-dom";


import './Header.css';
import logo from '../assets/logoPipo.svg'

function Header(){
    const history = useHistory();
    function handleImgClick(e){
        e.preventDefault()
        history.push('/')
    }    

    return(
        <nav>
            <div className="headerDiv">
                <div className="imgDiv" onClick={handleImgClick}>
                    <img src={logo} alt="Pipo Saúde" id="logo" />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <h1>Seja Bem-vindo!</h1>
                </div>
            </div>
        </nav>
    );
}

export default Header