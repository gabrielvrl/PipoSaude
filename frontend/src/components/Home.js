import React from 'react'
import './Login.css'

function Home(){
    const name = 'Tio Patinhas Bank'
    return(
        <div className="background-container">
            <div className="ui-container">
                <div className="home-container">
                    <h1>Seja Bem-vindo, {name} </h1>
                    <div>
                        <h2>Esses</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home