import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";


class Logout extends Component{

    render(){

        
        
        return(
            <>
            <div className="Login-container">
                <div>
                    <h1>Wylogowanie nastąpiło pomyślnie</h1>
                    <Decoration/>
                </div> 
                <ul className="Login-links">
                   <li>
                       <NavLink to={`/`}>Strona główna</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/logowanie`}>Zaloguj się</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/rejestracja`}>Zarejestruj się</NavLink>
                    </li>
               </ul>     
            </div>
            </>
        )
    }
}

export default Logout