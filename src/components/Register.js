import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";

class Register extends Component{

    render(){
        
        return(
            <>
            <div className="HomeHeader-log">
               <ul>
                   <li>
                       <NavLink to={`/logowanie`}>Zaloguj</NavLink>
                    </li>
                   <li>
                       <NavLink to={`/rejestracja`}>Załóż konto</NavLink>
                    </li>
               </ul>
            </div>
            <div className="HomeHeader-nav">
                <ul>
                   <li>Start</li>
                   <li>O co chodzi?</li>
                   <li>O nas</li>
                   <li>Fundacja i organizacje</li>
                   <li>Kontakt</li>
               </ul>
            </div>

            <div className="Login-container">
                <div>
                    <h1>Zaloguj się</h1>
                    <Decoration/>
                    <div className="Register-form">
                        <h2>Email</h2>
                        <input></input>
                        <h2>Hasło</h2>
                        <input></input>
                        <h2>Powtórz hasło</h2>
                        <input></input>
                    </div>
                </div> 
                <ul className="Login-links">
                   <li>
                       <NavLink to={`/rejestracja`}>Załóż konto</NavLink>
                    </li>
                   <li>
                       <NavLink to={`/logowanie`}>Zaloguj się</NavLink>
                    </li>
               </ul>     
            </div>
            </>
        )
    }
}

export default Register