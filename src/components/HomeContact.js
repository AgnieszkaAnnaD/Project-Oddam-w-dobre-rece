import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";

class HomeContact extends Component{

    handleSubmit = (e) => (
        e.preventDefault()
    )

    render(){
        
        return(
            <div className="HomeContact-container">
                
                <div className="HomeContact-form">
                    <div className="HomeContact-form-header">
                        <h1>Skontaktuj się z nami</h1>
                        <Decoration/>  
                    </div>
                    <form>
                        <div className="HomeContact-form-inputs">
                            <div className="HomeContact-form-input">
                                <h1>Wpisz swoje imię</h1>
                                <input placeholder="Krzysztof" type="text"></input>  
                            </div>
                            <div className="HomeContact-form-input">
                                <h1>Wpisz swój email</h1>
                                <input placeholder="abc@xyz.pl" type="email"></input>   
                            </div>
                        </div>
                        <div className="HomeContact-form-textarea">
                            <h1>Wpisz swoją wiadomość</h1>
                            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sem eget metus auctor, a finibus orci sagittis. Nullam magna urna, ultrices pharetra dolor at, porttitor ultrices justo. Maecenas consequat, nunc sed scelerisque posuere"></textarea>  
                        </div>
                        <button onSubmit={this.handleSubmit}>Wyślij</button>
                    </form>

                </div>
                <footer className="HomeContact-footer">
                    <h1>Copyright by Coders Lab</h1>
                    <div>
                        <img src={instagram}/>
                        <img src={facebook}/>
                    </div>
                </footer>
            </div>
        )
    }
}

export default HomeContact