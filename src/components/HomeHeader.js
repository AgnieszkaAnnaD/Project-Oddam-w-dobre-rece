import React, {Component} from "react";

class HomeHeader extends Component{

    render(){
        
        return(
            <>
            <div className="HomeHeader-log">
               <ul>
                   <li><a href="#">Zaloguj</a></li>
                   <li><a href="#">Załóż konto</a></li>
               </ul>
            </div>
            <div className="HomeHeader-nav">
                <ul>
                   <li><a href="#">Start</a></li>
                   <li><a href="#">O co chodzi?</a></li>
                   <li><a href="#">O nas</a></li>
                   <li><a href="#">Fundacja i organizacje</a></li>
                   <li><a href="#">Kontakt</a></li>
               </ul>
            </div>
            </>
        )
    }
}

export default HomeHeader