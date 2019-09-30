import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";


class Logout extends Component{

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
                <NavLink to={`/`}>Start</NavLink>
                   <li>O co chodzi?</li>
                   <li>O nas</li>
                   <li>Fundacja i organizacje</li>
                   <li>Kontakt</li>
               </ul>
            </div>

            <div className="Login-container">
                <div>
                    <h1>Wylogowanie nastąpiło pomyślnie</h1>
                    <Decoration/>
                </div> 
                <ul className="Login-links">
                   <li>
                       <NavLink to={`/`}>Strona główna</NavLink>
                    </li>
               </ul>     
            </div>
            </>
        )
    }
}

export default Logout