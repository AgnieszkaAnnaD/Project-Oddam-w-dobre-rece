import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";



class HomeMain extends Component{

    render(){
        
        return(
            <div className="HomeMain-conatiner">
                <div className="HomeMain-img">
                </div>
                <div className="HomeMain-links">
                    <h1>Zacznij pomagać!</h1>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2> 
                    <Decoration/>
                    <div className="HmeMain-btns">
                        <button><NavLink to={`/logowanie`}>Oddaj rzeczy</NavLink></button>
                        <button><NavLink to={`/logowanie`}>Zorganizuj zbiórkę</NavLink></button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default HomeMain