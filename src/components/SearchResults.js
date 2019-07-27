import React, {Component} from "react"
const API_KEY = "a70dbfe19b800809dfdd3e89e8532c9e";

class SearchResults extends Component{
    constructor(props){
    super(props);
    this.state={
        movies:[]

    }
    }

    componentDidMount(){

             fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.props.query}`)
       
        .then( res =>res.json())
        .then(data =>{
            console.log(data)
          this.setState({

            movies: data.results
          })
  
  
        }) 
    }

   

    render(){
        return(
            
            <div>
                {this.state.movies.map(m => <div><img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + m.poster_path} />
                {m.title}</div>)}</div>
            
        
           
        )


        
    }
}


export default SearchResults;