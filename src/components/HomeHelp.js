import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

class HomeHelp extends Component{

    state = {
        foundations: [],
        organizations: [],
        gatherings: []
    }

    handleClickF = () => {
        fetch(`http://localhost:3001/fundacje`)
        .then(resp => resp.json())
        .then(foundAPI => {
            this.setState({
                foundations: foundAPI,
                choose: "foundations",
            })
        }) 
        .catch(err => console.error(err));
    }

    handleClickO = () => {
        console.log("click");
        this.setState({
            choose: "organizations"
        });
        fetch(`http://localhost:3001/organizacje`)
        .then(resp => resp.json())
        .then(orgAPI => {
            this.setState({
                organizations: orgAPI,
            })
        }) 
        .catch(err => console.error(err));
    }

    handleClickZ = () => {
        console.log("click");
        this.setState({
            choose: "gatherings"
        });
        fetch(`http://localhost:3001/zbiorki`)
        .then(resp => resp.json())
        .then(gathAPI => {
            this.setState({
                gatherings: gathAPI,
            })
        }) 
        .catch(err => console.error(err));
    }



    render(){
        
        return(
            <div style={{height: "300px"}}>
                <h1>Komu pomagamy?</h1>
                <Decoration/>
                <div>
                    <button onClick={this.handleClickF}>Fundacjom</button>
                    <button onClick={this.handleClickO}>Organizacjom pozarządowym</button>
                    <button onClick={this.handleClickZ}>Lokalnym zbiórkom</button>
                </div>
            </div>
        )
    }
}

export default HomeHelp