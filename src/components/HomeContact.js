import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";

class HomeContact extends Component{

    state = {
        name: "",
        email: "",
        message: "",

        nameValidation: "",
        emailValidation: "",
        messageValidation: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
    } 

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleClick = () => {
        console.log(this.state);
        if (this.validateName(this.state.name)) {
            this.setState({
                nameValidation: "ok"
            }) 
        }
        else {
            this.setState({
                nameValidation: "error"
            }) 
        }

        if (this.validateEmail(this.state.email)) {
            this.setState({
                emailValidation: "ok"
            }) 
        }
        else {
            this.setState({
                emailValidation: "error"
            }) 
        }

        if (this.validateMessage(this.state.message)) {
            this.setState({
                messageValidation: "ok"
            }) 
        }
        else {
            this.setState({
                messageValidation: "error"
            })  
        }

        const {nameValidation, emailValidation, messageValidation} = this.state
        if (nameValidation === "ok" && emailValidation === "ok" && messageValidation === "ok"){
            this.handleFetch(this.state.name+this.state.email+this.state.message)
        }
        
        console.log(JSON.stringify(this.state.name+this.state.email+this.state.message))
    }

    validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    validateName = (name) => {
        const re = /^[a-zA-Z0-9_]+$/;
        return re.test(name)
    }

    validateMessage = (message) => {
       if(message.length < 120){
           return false
       }
       else if(message.length >= 120){
           return true
       }
    }
    handleFetch = (e) => {
        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, 
            {
                headers: {
                    "Content-Type": "application/json",    
                },
                method: 'POST',
                body: JSON.stringify(e)
            })   
            .then(resp => resp.json()) 
            .then(dataFromApi => {
                console.log(dataFromApi)
            })
            .catch(err => console.error(err));
        }

    render(){
        let allertName = "";
        let allertEmail = "";
        let allertMessage = "";
        let messageSent = "";

        const {nameValidation, emailValidation, messageValidation} = this.state

        if(nameValidation === "error") {
            allertName = <span style={{color: "red", fontSize: "12px"}}>Podane imię jest nieprawidłowe!</span>
        }

        if(emailValidation === "error") {
            allertEmail = <span style={{color: "red", fontSize: "12px"}}>Podany email jest nieprawidłowy!</span>
        }

        if(messageValidation === "error") {
            allertMessage = <span style={{color: "red", fontSize: "12px"}}>Wiadomość musi mieć conajmniej 120 znaków!</span>
        }

        if(nameValidation === "ok" && emailValidation === "ok" && messageValidation === "ok"){
            messageSent = <span style={{color: "green", fontSize: "18px", alignSelf: "center", marginBottom: "15px"}}>Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy</span>
        }


        
        return(
            <div className="HomeContact-container">
                
                <div className="HomeContact-form">
                    <div className="HomeContact-form-header">
                        <h1>Skontaktuj się z nami</h1>
                        <Decoration/>  
                        {messageSent}
                    </div>
                    <form>
                        <div className="HomeContact-form-inputs">
                            <div className="HomeContact-form-input">
                                <h1>Wpisz swoje imię</h1>
                                <input 
                                    placeholder="Krzysztof" 
                                    type="text" name="name" 
                                    onChange={ this.handleChange } 
                                    value={ this.state.name }>
                                </input> 
                            {allertName} 
                            </div>
                            <div className="HomeContact-form-input">
                                <h1>Wpisz swój email</h1>
                                <input 
                                    placeholder="abc@xyz.pl" 
                                    type="email" name="email" 
                                    onChange={ this.handleChange } 
                                    value={ this.state.email }>
                                </input> 
                                {allertEmail}  
                            </div>
                        </div>
                        <div className="HomeContact-form-textarea">
                            <h1>Wpisz swoją wiadomość</h1>
                            <textarea 
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sem eget metus auctor, a finibus orci sagittis. Nullam magna urna, ultrices pharetra dolor at, porttitor ultrices justo. Maecenas consequat, nunc sed scelerisque posuere" 
                                name="message" 
                                onChange={ this.handleChange } 
                                value={ this.state.message }>
                            </textarea>  
                            {allertMessage}
                        </div>
                        <button onSubmit={this.handleSubmit} onClick={this.handleClick}>Wyślij</button>
                    </form>

                </div>
                <footer className="HomeContact-footer">
                    <h1>Copyright by Coders Lab</h1>
                    <div>
                        <img src={instagram} alt="instagram icon"/>
                        <img src={facebook} alt="facebook icon"/>
                    </div>
                </footer>
            </div>
        )
    }
}

export default HomeContact