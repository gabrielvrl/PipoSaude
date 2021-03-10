import React from 'react'
import './style.css'

import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'

function Login(){
    function handleGoogleLogin(e){
        e.preventDefault()
        console.log("Google Login")
    }

    function handleFacebookLogin(e){
        e.preventDefault()
        console.log("Facebook Login")
    }

    return(
        <div className="background-container">
            <div className="ui-container">
                <div className="login-container">
                    <h1>Login</h1>
                    <div>
                        <AiFillGoogleCircle style={{ fontSize:75, marginRight: '3px'}} onClick={handleGoogleLogin} />
                        <AiFillFacebook style={{ fontSize:75}} onClick={handleFacebookLogin} />
                    </div>
                    <h1>ou</h1>
                    <div>
                        <h2>Email:</h2>
                        <input className="login-input" />
                        <h2>Senha:</h2>
                        <input className="login-input" />
                    </div>
                    <button className="login-button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login