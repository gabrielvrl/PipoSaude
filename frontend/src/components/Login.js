import React from 'react'
import './Login.css'

import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'

function Login({ history }){
    function handleGoogleLogin(e){
        e.preventDefault()
        console.log("Google Login")
    }

    function handleFacebookLogin(e){
        e.preventDefault()
        console.log("Facebook Login")
    }

    function handleSubmit(e){
        e.preventDefault()
        history.push('/home')
    }

    function handleSignUp(e){
        e.preventDefault()
        history.push('/signup')
    }

    return(
        <div className="login-container">
            <h1>Login</h1>
            <div>
                <AiFillGoogleCircle style={{ fontSize:75, marginRight: '3px', color: 'white'}} onClick={handleGoogleLogin} />
                <AiFillFacebook style={{ fontSize:75, color:'white'}} onClick={handleFacebookLogin} />
            </div>
            <h1>ou</h1>
            <div>
                <h2>Email:</h2>
                <input className="login-input" />
                <h2>Senha:</h2>
                <input className="login-input" />
            </div>
            <button onClick={handleSubmit} className="login-button">Entrar</button>
            <h3 onClick={handleSignUp} id="SignUp" >Não está cadastrado? Cadastre-se!</h3>
        </div>
    )
}

export default Login