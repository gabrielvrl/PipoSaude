import React from 'react'
import './Home.css'

import { AiFillPlusCircle } from 'react-icons/ai'

function Home(){
    const name = 'Tio Patinhas Bank'
    const employeesNumber = "16"

    function handleClick(e){
        e.preventDefault()
        console.log("push add new employer")
    }

    return(
        <div className="home-container">
            <div className="home-header">
                <h1>Olá, </h1><h1 id="home-name-client">{name}</h1>
            </div>
            <div className="home-infos">
                <h3>Você tem {employeesNumber} funcionários atualmente</h3>
            </div>
            <div className="home-add-new-employee">
                <AiFillPlusCircle id="add-button" /> <h3>Adicionar novo funcionário</h3>
            </div>
        </div>
    )
}

export default Home