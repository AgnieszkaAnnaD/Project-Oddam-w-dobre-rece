import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import HomeMain from "./HomeMain";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeHelp from "./HomeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";


class HomeHeader extends Component{

    render(){
        
        return(
            <>
            <div className="HomeHeader-log">
               <ul>
                   <li>
                       <NavLink to={`/logowanie`}>Zaloguj</NavLink>
                    </li>
                   <li>
                       <NavLink to={`/rejestracja`}>Załóż konto</NavLink>
                    </li>
               </ul>
            </div>
            <div className="HomeHeader-nav">
                <ul>
                   <li><Link activeClass="active" to="HomeMain" spy={true} smooth={true} duration={500}>Start</Link></li>
                   <li><Link activeClass="active" to="HomeSteps" spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
                   <li><Link activeClass="active" to="HomeAbout" spy={true} smooth={true} duration={500}>O nas</Link></li>
                   <li><Link activeClass="active" to="HomeHelp" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link></li>
                   <li><Link activeClass="active" to="HomeContact" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
               </ul>
            </div>

            <Element name="HomeMain"><HomeMain/></Element>
            <Element><HomeThreeColumns></HomeThreeColumns></Element>
            <Element name="HomeSteps"><HomeSteps/></Element>
            <Element name="HomeAbout"><HomeAbout/></Element>
            <Element name="HomeHelp"><HomeHelp/></Element>
            <Element name="HomeContact"><HomeContact/></Element>
            <Element><HomeFooter/></Element>
            </>
        )
    }
}

export default HomeHeader