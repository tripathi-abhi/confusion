import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/Menu';
import { DISHES } from './Shared/dishes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Dishes : DISHES      
    };

  }

 render () {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
         <NavbarBrand href="/">Complete Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={ this.state.Dishes}/>
        </div>
  );
 }
}
export default App;