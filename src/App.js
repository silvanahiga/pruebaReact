import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
// import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import SearchResults from "./components/SearchResults"
import Sidebar from "./components/Sidebar"
import Category from "./components/Category"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }



  handleQuery = q => {  //esta es la funcion que se envia al hijo para que devuelva con los datos
    console.log(q)

    this.setState({
      query: q
    })
    // this.handleQuery()

  }

  handleClick = c => {
    console.log(c)
    console.log('caca')
    this.setState  ({
      category: c
    })
  }

  //aca va lo de category


  render() {
  
    return (
      <div className="App">

        <Navbar
          handleQuery={this.handleQuery}  //esta es la funcion que le pasamos al hijo para que nos devueva el dato que necesitamos
        />
        <Sidebar
          handleClick={this.handleClick}
        />
        {/* <SearchResults
          query={this.state.query}
        /> */}

       

        {
          this.state.category ? <Category category={this.state.category} /> :
     
          this.state.query ? <SearchResults query={this.state.query} /> : 
          <Main/>
        }
 



       


    

      </div>
    );


  }

}

export default App;
