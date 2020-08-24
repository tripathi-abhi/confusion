import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu';
import { DISHES } from '../Shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      Dishes : DISHES,
      selectedDish: null
    };

  }

  
  onDishSelect(dishId) {
    this.setState({selectedDish:dishId});
}

 render () {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
         <NavbarBrand href="/">Complete Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.Dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
      <DishDetail dish ={this.state.Dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
  );
 }
}
export default Main;