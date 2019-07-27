import React, { Component } from "react";
import Category from "./Category"


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            



        }
    }

    handleCategory = e => {
        console.log(e.target.id) // dato del id
        this.setState({
            category: e.target.id //esto guarda el dato del id del div donde hiciste click
        })
        this.props.handleClick(e.target.id) // aca le pasamos el dato del id al padre
    }





    render() {
        return (
            <div>
                <div onClick={this.handleCategory} id="popular">popular</div>
                <div onClick={this.handleCategory} id="top_rated">top rated</div>
                <div onClick={this.handleCategory} id="upcoming">upcoming</div>
                <div onClick={this.handleCategory} id="now_playing">now playing</div>
            </div>

            // <div>{this.state.movies.map (m=><div>{m.title}</div>)}</div>



        )



    }
}


export default Sidebar;