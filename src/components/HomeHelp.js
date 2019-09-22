import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

class HomeHelp extends Component{

    render(){
        
        return(
            <div style={{height: "300px"}}>
                <h1>Komu pomagamy?</h1>
                <Decoration/>
                <div>
                    <button>Fundacjom</button>
                    <button>Organizacjom pozarządowym</button>
                    <button>Lokalnym zbiórkom</button>
                </div>
            </div>
        )
    }
}

export default HomeHelp