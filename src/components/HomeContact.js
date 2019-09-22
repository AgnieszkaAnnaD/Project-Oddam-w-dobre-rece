import React, {Component} from "react";

class HomeContact extends Component{

    handleSubmit = (e) => (
        e.preventDefault()
    )

    render(){
        
        return(
            <div className="HomeContact-container">
                <div className="HomeContact-form">
                    <form>
                        <h1>Wpisz swoje imię</h1>
                        <input placeholder="Krzysztof"></input>
                        <h1>Wpisz swój email</h1>
                        <input placeholder="abc@xyz.pl"></input>
                        <h1>Wpisz swoją wiadomość</h1>
                        <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sem eget metus auctor, a finibus orci sagittis. Nullam magna urna, ultrices pharetra dolor at, porttitor ultrices justo. Maecenas consequat, nunc sed scelerisque posuere"></textarea>
                        <button onSubmit={this.handleSubmit}>Wyślij</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default HomeContact