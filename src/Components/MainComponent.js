import React, { Component } from 'react';
import Menu from './Menu';
import { DISHES } from '../Shared/dishes';
import { PROMOTIONS } from '../Shared/promotions';
import { LEADERS } from '../Shared/leaders';
import { COMMENTS } from '../Shared/comments';
// import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import DishDetail from './DishdetailComponent';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      Dishes : DISHES,
      Promotions: PROMOTIONS,
      Leaders: LEADERS,
      Comments: COMMENTS,
    };

  }




 render () {

  const DishWithId = ({match}) =>{
    return(
      <DishDetail dish= {this.state.Dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]} 
      comments= {this.state.Comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId,10))}
      />
    );
  }

   const HomePage = () => {
     return (
      <Home dish={this.state.Dishes.filter((dish)=> dish.featured)[0]}
      promotion={this.state.Promotions.filter((promotion)=> promotion.featured)[0]}
      leaders={this.state.Leaders.filter((leader)=> leader.featured)[0]}
      />
     );
   }

  return (
    <div>
      <Header />
      <Switch>
         <Route path="/home" component={HomePage} />
         <Route exact path="/menu" component={() => <Menu dishes={this.state.Dishes} /> } />
         <Route path ="/menu/:dishId" component = {DishWithId} />
         <Route path="/contactus" component={Contact} />
         <Route path="/aboutus" component={() => <About leaders={this.state.Leaders} />} />
         <Redirect to="/home" />
      </Switch>
      <Footer />
      </div>
  );
 }
}
export default Main;