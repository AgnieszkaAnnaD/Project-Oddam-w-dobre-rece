import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";


class Login extends Component{

    state = {
        email: "",
        password: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        console.log(this.state)
    }
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
                        <form onSubmit={this.handleSubmit}>
                            <h2>Email</h2>
                            <input type="email" id="email" onChange={this.handleChange}></input>
                            <h2>Hasło</h2>
                            <input type="password" id="password" onChange={this.handleChange}></input>
                            <button type="submit">Zaloguj się</button>
                            
                              
                        </form>
                    </div>
                </div>   
                
                <ul className="Login-links">
                    <li>
                        <NavLink to={`/logowanie`}>Zaloguj się</NavLink>
                    </li>
                </ul>     
            </div>
            </>
        )
    }
}

export default Login