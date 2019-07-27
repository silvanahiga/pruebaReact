import React, { Component } from "react";


class Navbar extends Component { //el componente de clase puede guardar estado/datos, otra forma de crear objetos
  constructor(props) {
    super(props)  //
  }
  handleChange = e => {
    // console.log(e.target.value) //aca sabemos el valor del input que estamos tipeando
    this.setState({
      query: e.target.value //esto guarda el dato del input que ingresaste
    })
  }

  handleSubmit = e => {  //el dato del search
    e.preventDefault();
    const query = this.state.query; // este es el valor que queremos pasar al padre
    console.log(this.props)
    this.props.handleQuery(query) //aca llamamos a la funcion del padre para pasarle por parametros los datos query


  }

  render() {
    return (
      <div>
        <img src="https://www.stickpng.com/assets/images/584854dab772315a9e4dd5cf.png" />
        <form
          onSubmit={this.handleSubmit}
        >
          <input type="text"
            onChange={this.handleChange}
          />


        </form>

        <div clas="login">
          login
        </div>




      </div>
    )
  }

}


export default Navbar;