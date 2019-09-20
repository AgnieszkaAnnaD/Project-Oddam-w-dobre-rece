import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";;

class HomeAbout extends Component{

    render(){
        
        return(
            <div className="HomeAbout-container">
                <div>
                    <h1>O nas</h1>
                    <Decoration/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacus sapien, iaculis nec commodo vel, lacinia ac tortor. Praesent interdum mi neque, ut lacinia mi congue in. </p>
                </div>
                <div className="HomeAbout-img">

                </div>
                
            </div>
        )
    }
}

export default HomeAbout