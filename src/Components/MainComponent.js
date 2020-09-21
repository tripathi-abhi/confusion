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
import { addComment, fetchDishes } from '../Redux/ActionCreator';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
  return {
    Dishes : state.Dishes,
    Promotions: state.Promotions,
    Leaders: state.Leaders,
    Comments: state.Comments,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
});

class Main extends Component {
  constructor(props){
    super(props);
    
  }

  componentDidMount(){
    this.props.fetchDishes();
  }
  render () {

  const DishWithId = ({match}) =>{
    return(
      <DishDetail dish= {this.props.Dishes.Dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]} 
      isLoading={this.props.Dishes.isLoading}
      ErrMsg={this.props.Dishes.errmsg}
      comments= {this.props.Comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId,10))}
      addComment= {this.props.addComment}
      />
    );
  }

   const HomePage = () => {
     return (
      <Home dish={this.props.Dishes.Dishes.filter((dish)=> dish.featured)[0]}
      dishesLoading={this.props.Dishes.isLoading}
      dishesErrMsg={this.props.Dishes.errmsg}
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
         <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
         <Route path="/aboutus" component={() => <About leaders={this.props.Leaders} />} />
         <Redirect to="/home" />
      </Switch>
      <Footer />
      </div>
  );
 }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));