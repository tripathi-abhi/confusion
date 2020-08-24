import React , { Component } from 'react';
import {Card , CardBody , CardImg , CardText, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish){
        if(dish!=null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src= {dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComment(dish.comments)}
                    </div>
                </div>
                        
            );
        }
        else
        return(
            <div></div>
        );

    }


    renderComment(comments){
        const dishList = comments.map((comment)=> {
            return(
                <ul key={comment.id} className="list-unstyled">
                        <li> {comment.comment}</li>
                        <li>--{comment.author},{new Intl.DateTimeFormat('en-US', {year: 'numeric' , month: 'short' , day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
            );

        });

        return(
            dishList
        );
    }

    render(){
        
                return (
                    <div>
                            {this.renderDish(this.props.dish)}
                    </div>    
                );
            }
    };
    
export default DishDetail;