import React, { Component } from "react";



const API_KEY = "a70dbfe19b800809dfdd3e89e8532c9e";
class Category extends Component {
    constructor(props){
        super(props)
        //creamos el estado
        this.state = {
          movies : []
        }
    }

    componentDidMount(){
        console.log("pis")
        console.log(this.props.category)
      // const category = this.props.category; //por aca le digo que categoria es popular, top rated,etc
      const { props: {category} } = this; //DESTRUCTURING (lo mismo que lo de arriba)
      fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
      .then( res =>res.json())
      .then(data =>{
          console.log(data)
        this.setState({
          movies: data.results
        })


      }) 
    }

    render(){
        console.log("pis")
        return(
            <div>
                <h2>{this.props.title}</h2>
                <div class="movies">
                {this.state.movies.map(m => <div><img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + m.poster_path} />
                {m.title}</div>)}




                </div>

            </div>
        )
    }
}

export default Category