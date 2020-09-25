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
import { postComment , fetchDishes, fetchComments, fetchPromos } from '../Redux/ActionCreator';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from'react-transition-group';


const mapStateToProps = state => {
  return {
    Dishes : state.Dishes,
    Promotions: state.Promotions,
    Leaders: state.Leaders,
    Comments: state.Comments,
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
});

class Main extends Component {
  constructor(props){
    super(props);
    
  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  render () {

  const DishWithId = ({match}) =>{
    return(
      <DishDetail dish= {this.props.Dishes.Dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]} 
      isLoading={this.props.Dishes.isLoading}
      ErrMsg={this.props.Dishes.errmsg}
      comments= {this.props.Comments.Comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId,10))}
      commentsErrMsg={this.props.Comments.errmsg}
      postComment= {this.props.postComment}
      />
    );
  }

   const HomePage = () => {
     return (
      <Home dish={this.props.Dishes.Dishes.filter((dish)=> dish.featured)[0]}
      dishesLoading={this.props.Dishes.isLoading}
      dishesErrMsg={this.props.Dishes.errmsg}
      promotion={this.props.Promotions.Promotions.filter((promotion)=> promotion.featured)[0]}
      promosLoading={this.props.Promotions.isLoading}
      promosErrMsg={this.props.Promotions.errmsg}
      leaders={this.props.Leaders.filter((leader)=> leader.featured)[0]}
      />
     );
   }

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
         <Switch>
           <Route path="/home" component={HomePage} />
           <Route exact path="/menu" component={() => <Menu dishes={this.props.Dishes}/> } />
           <Route path ="/menu/:dishId" component = {DishWithId} />
           <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
           <Route path="/aboutus" component={() => <About leaders={this.props.Leaders} />} />
           <Redirect to="/home" />
         </Switch>
      </CSSTransition>
      </TransitionGroup>
      <Footer />
      </div>
  );
 }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));