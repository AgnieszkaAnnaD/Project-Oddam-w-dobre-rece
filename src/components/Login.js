import React, { Component } from 'react';
import { ReactComponent as Decoration } from '../assets/Decoration.svg';
import { NavLink } from 'react-router-dom';
import { connect } from  'react-redux';
import { signIn } from '../redux/actions/authActions';


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
        this.props.signIn(this.state);
    }
    render(){
        const { authError } = this.props
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
            <div className="HomeHeader-nav login-start">
                <ul>
                    <NavLink to={`/`}>Przejdź do strony głównej</NavLink>
               </ul>
            </div>
            <div className="Login-container">
                <div>
                    <h1>Zaloguj się</h1>
                    <Decoration/>
                    <div className="Login-form">
                        <form onSubmit={this.handleSubmit}>
                            <h2>Email</h2>
                            <input type="email" id="email" onChange={this.handleChange}></input>
                            <h2>Hasło</h2>
                            <input type="password" id="password" onChange={this.handleChange}></input>
                           
                            <button type="submit" className="Login-button">Zaloguj się</button>
                        </form>
                    </div>
                </div>   
                
                <ul className="Login-links">
                    <li>
                        <NavLink to={`/rejestracja`}>Zarejestruj się</NavLink>
                    </li>
                </ul>  
                
                <div className="LoginError">
                    { authError ? <p>{ authError }</p> : null}
                </div>    
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)