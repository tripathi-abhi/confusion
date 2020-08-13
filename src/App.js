import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/Menu'

class App extends Component {
 render () {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
         <NavbarBrand href="/">Complete Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
        </div>
  );
 }
}

export default App;