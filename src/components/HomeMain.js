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
                    <h1>Zacznij pomagać!
                        <br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <Decoration/>
                    <div className="HmeMain-btns">
                        <button><NavLink to={`/logowanie`}>Oddaj <br/> rzeczy</NavLink></button>
                        <button><NavLink to={`/logowanie`}>Zorganizuj zbiórkę</NavLink></button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default HomeMain