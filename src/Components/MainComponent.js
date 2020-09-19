import React, { Component } from 'react';
import Menu from './Menu';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import DishDetail from './DishdetailComponent';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    Dishes : state.Dishes,
    Promotions: state.Promotions,
    Leaders: state.Leaders,
    Comments: state.Comments,
  }
}


class Main extends Component {
  constructor(props){
    super(props);
    
  }

  render () {

  const DishWithId = ({match}) =>{
    return(
      <DishDetail dish= {this.props.Dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]} 
      comments= {this.props.Comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId,10))}
      />
    );
  }

   const HomePage = () => {
     return (
      <Home dish={this.props.Dishes.filter((dish)=> dish.featured)[0]}
      promotion={this.props.Promotions.filter((promotion)=> promotion.featured)[0]}
      leaders={this.props.Leaders.filter((leader)=> leader.featured)[0]}
      />
     );
   }

  return (
    <div>
      <Header />
      <Switch>
         <Route path="/home" component={HomePage} />
         <Route exact path="/menu" component={() => <Menu dishes={this.props.Dishes} /> } />
         <Route path ="/menu/:dishId" component = {DishWithId} />
         <Route path="/contactus" component={Contact} />
         <Route path="/aboutus" component={() => <About leaders={this.props.Leaders} />} />
         <Redirect to="/home" />
      </Switch>
      <Footer />
      </div>
  );
 }
}
export default withRouter(connect(mapStateToProps)(Main));