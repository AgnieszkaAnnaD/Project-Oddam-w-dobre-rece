import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
import { signUp } from "../redux/actions/authActions";

import { connect } from 'react-redux'
import { add } from '../redux/actions/todos'

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
        email: "",
        password: "",
        // confirmPassword: "",
    }
    }

    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.signUp(this.state)
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
                    <li>
                        <NavLink to={`/wylogowano`}>Wyloguj</NavLink>
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
                    <h1>Załóż konto</h1>
                    <Decoration/>
                    <div className="Register-form">
                        <form onSubmit={this.handleSubmit}>
                            <h2>Email</h2>
                            <input type="email" id="email" onChange={this.handleChange}></input>
                            <h2>Hasło</h2>
                            <input type="password" id="password" onChange={this.handleChange}></input>
                            <h2>Powtórz hasło</h2>
                            <input type="password" id="confirmPassword" onChange={this.handleChange}></input>
                            <button type="submit" className="Register-button">Załóż konto</button>
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
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(Register);