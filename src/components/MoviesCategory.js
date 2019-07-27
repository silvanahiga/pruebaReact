import React, { Component } from "react";
import Movie from "./Movie"

import  './movies-category.css'

const API_KEY = "a70dbfe19b800809dfdd3e89e8532c9e";
class MoviesCategory extends Component {
    constructor(props){
        super(props)
        //creamos el estado
        this.state = {
          movies : []
        }
    }

    componentDidMount(){
      // const category = this.props.category; //por aca le digo que categoria es popular, top rated,etc
      const { props: {category} } = this; //DESTRUCTURING (lo mismo que lo de arriba)
      fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
      .then( res =>res.json())
      .then(data =>{
        this.setState({
          movies: data.results.slice(0,5)
        })


      }) 
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <div class="movies">
                {this.state.movies.map(m => <Movie data={m}/>)}


                </div>

            </div>
        )
    }
}

export default MoviesCategory