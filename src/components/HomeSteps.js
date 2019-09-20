import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import { ReactComponent as Icon1 } from "../assets/Icon-1.svg";
import { ReactComponent as Icon2 } from "../assets/Icon-2.svg";
import { ReactComponent as Icon3 } from "../assets/Icon-3.svg";
import { ReactComponent as Icon4 } from "../assets/Icon-4.svg";



class HomeSteps extends Component{

    render(){
        
        return(
            <div className="HomeSteps">
                <h1>Wystarczą 4 proste kroki</h1>
                <Decoration/>
                <div className="HomeSteps-steps">
                    <div>
                        <Icon1/>
                        <h1>Wybierz rzeczy</h1> 
                        <p>______</p>
                        <h2>ubrania, zabawki, sprzęt i inne</h2>
                    </div>
                    <div>
                        <Icon2/>
                        <h1>Wybierz rzeczy</h1> 
                        <p>______</p>
                        <h2>ubrania, zabawki, sprzęt i inne</h2>
                    </div>
                    <div>
                        <Icon3/>
                        <h1>Wybierz rzeczy</h1> 
                        <p>______</p>
                        <h2>ubrania, zabawki, sprzęt i inne</h2>
                    </div>
                    <div>
                        <Icon4/>
                        <h1>Wybierz rzeczy</h1> 
                        <p>______</p>
                        <h2>ubrania, zabawki, sprzęt i inne</h2>
                    </div>
                </div>
                <button><NavLink to={`/logowanie`}>Oddaj rzeczy</NavLink></button>
            </div>
        )
    }
}

export default HomeSteps