import React, {Component} from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

class HomeHelp extends Component{

    state = {
        choose: "fundacje",
        foundations: [],
        allFoundations: [],
    }

    componentDidMount() {
        this.fetchPage(this.state.choose, 0, 3);
        this.fetchData(this.state.choose);
    }

    handleClick = (name, start, end) => () => {
        this.fetchPage(name, start, end);
        this.fetchData(name);
    }

    fetchData = name => {
        fetch(`http://localhost:3001/${name}`)
        .then(resp => resp.json())
        .then(foundAPI => {
            this.setState({
                allFoundations: foundAPI,
            });
        this.calculateMaxPagesHandler(this.state.allFoundations.length);   
        }) 
        .catch(err => console.error(err));
    } 

    fetchPage = (name, start, end) => {
        fetch(`http://localhost:3001/${name}?_start=${start}&_end=${end}`)
        .then(resp => resp.json())
        .then(foundAPI => {
            this.setState({
                foundations: foundAPI,
                choose: name,
            });  
        }) 
        .catch(err => console.error(err));
    }

    calculateMaxPagesHandler = allItemsCount => {
        const maxPages = Math.ceil(allItemsCount / 3);
        this.setState({
          maxPages
        });
      }

    renderPagination = () => {
        const {maxPages} = this.state;
        const links = [];

        if (maxPages === 1){
            return ""
        }

        else if (maxPages > 1){
            for(let i=0; i < maxPages; i++){
                links.push(
                <li onClick={() => { this.fetchPage(this.state.choose, 0+i*3, 3+i*3) }} key={i}>
                    <span>{ i + 1 }</span>
                </li>
                )
            } 
        }

        return (
            <ul className="HomeHelp-pagination">
              {links}
            </ul>
            )
    }

    get list() {
        return this.state.foundations.map((item, index)=> (
            <li key={index}> 
                <h2>{item.name}</h2>
                <div>
                    <h3>{item.decription}</h3>
                    <h4>{item.objects}</h4>
                </div>  
            </li>
        ))
    }

    render(){
        // console.log(this.state)
        return(
            <div className="HomeHelp-container">
                <h1>Komu pomagamy?</h1>
                <Decoration/>
                <div>
                    <button onClick={this.handleClick("fundacje", 0, 3)}>Fundacjom</button>
                    <button onClick={this.handleClick("organizacje", 0, 3)}>Organizacjom pozarządowym</button>
                    <button onClick={this.handleClick("zbiorki", 0, 3)}>Lokalnym zbiórkom</button>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul>
                    {this.list}
                </ul> 
                <div>
                    { this.renderPagination() }
                </div>
            </div>
           
        )
    }
}

export default HomeHelp