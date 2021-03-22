import React, { useState } from 'react'
import './Login.css'

import validator from 'validator'
import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'

function Login({ history }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        history.push({ 
            pathname: '/home',
            state: { email }
        })
    }

    function handleSignUp(e){
        e.preventDefault()
        history.push('/signup')
    }

    const [emailError, setEmailError] = useState('') 
    const validateEmail = (e) => { 
      var email = e.target.value 
    
      if (validator.isEmail(email)) { 
        setEmail(email)
        setEmailError('Valid Email :)') 
      } else { 
        setEmailError('Enter valid Email!') 
      } 
    } 

    return(
        <div className="login-container">
            <h1>Login</h1>
            <div>
                <AiFillGoogleCircle style={{ fontSize:75, marginRight: '3px', color: 'white'}} onClick={handleGoogleLogin} />
                <AiFillFacebook style={{ fontSize:75, color:'white'}} onClick={handleFacebookLogin} />
            </div>
            <h1>ou</h1>
            <div className="input-container">
                <h2>Email:</h2>
                <input className="login-input" id="email" type="email" name="email" placeholder="Digite seu email" onChange={(e) => validateEmail(e)} />
                <br />
                <span>{emailError}</span>
                <h2>Senha:</h2>
                <input className="login-input" type="password" name="password" placeholder="Digite sua senha" />
            </div>
            <button onClick={handleSubmit} className="login-button">Entrar</button>
            <h3 onClick={handleSignUp} id="SignUp" >Não está cadastrado? Cadastre-se!</h3>
        </div>
    )
}

export default Login