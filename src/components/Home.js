import React, {Component} from "react";

import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeHelp from "./HomeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";


class Home extends Component{

    render(){
        
        return(
            <div>
               <HomeHeader/>
               <HomeMain/>
               <HomeThreeColumns/>
               <HomeSteps/>
               <HomeAbout/>
               <HomeHelp/>
               <HomeContact/>
               <HomeFooter/>
            </div>
        )
    }
}

export default Home