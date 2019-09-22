import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";



class HomeSteps extends Component{

    render(){
        
        return(
            <div className="HomeSteps">
                <h1>Wystarczą 4 proste kroki</h1>
                <Decoration/>
                <div className="HomeSteps-steps">
                    <div>
                        <img src={icon1} />
                        <h2>Wybierz rzeczy</h2> 
                        <p>__________</p>
                        <h3>ubrania, zabawki, sprzęt i inne</h3>
                    </div>
                    <div>
                        <img src={icon2} />
                        <h2>Spakuj je</h2> 
                        <p>__________</p>
                        <h3>skorzystaj z worków na śmieci</h3>
                    </div>
                    <div>
                        <img src={icon3} />
                        <h2>Zdecyduj komu chcesz pomóc</h2> 
                        <p>__________</p>
                        <h3>wybierz zaufane miejsce</h3>
                    </div>
                    <div>
                        <img src={icon4} />
                        <h2>Zamów kuriera</h2> 
                        <p>__________</p>
                        <h3>kurier przyjedzie w dogodnym terminie</h3>
                    </div>
                </div>
                <button><NavLink to={`/logowanie`}>Oddaj rzeczy</NavLink></button>
            </div>
        )
    }
}

export default HomeSteps