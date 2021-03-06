import React, { Component } from 'react';
import { Modal, Button, ModalHeader, ModalBody, Label, Row, Col, Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Errors, Control }  from 'react-redux-form';
import { Loading } from './LoaderComponent.js';
import { baseUrl } from '../Shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const minLength = (len) => (val) => !(val) || (val.length>=len);
const maxLength = (len) => (val) => !(val) || (val.length<=len);
class CommentForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen : false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


toggleModal(){
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}


handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.commentText);
}


render(){
    return(
      <div>
        <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil" />Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm model="modal" onSubmit={this.handleSubmit}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={12}>Rating</Label>
                        <Col md={12}>
                        <Control.select model=".rating" name="rating" className="form-control" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                            <Label htmlFor="author" md={12}>Your Name</Label>
                            <Col md={12}>
                            <Control.text model=".author" name="author" className="form-control"
                            placeholder="Your Name"
                            validators= {{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                            />
                            <Errors
                            className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{
                                required: "Required",
                                minLength: "Must be greater than 2 characters",
                                maxLength: "Must be 15 characters or less"
                            }}
                            />
                            </Col>
                        </Row>
                    <Row className="form-group">
                            <Label htmlFor="commentText" md={12}>Comment</Label>
                            <Col md={12}>
                            <Control.textarea rows="6" model=".commentText" name="commentText" className="form-control"
                            />
                            </Col>
                    </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                </LocalForm>
            </ModalBody>
        </Modal>
      </div>
    );
}


}

    function RenderDish({dish}){

            return (
                    <div className="col-12 col-md-5 m-1">
                        <FadeTransform in
                        tranformProps={{
                            exitTranform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <CardImg top src= {baseUrl + dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        </FadeTransform>
                    </div>
                        
            );
        }



    function RenderComment({comments,postComment,dishId}){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul  className="list-unstyled">
                    <Stagger in>
                    {comments.map((comment) => {
                    return(
                        <Fade in>
                        <li key={comment.id}>
                         <p>{comment.comment}</p>
                         <p> -- {comment.author},{new Intl.DateTimeFormat('en-US', {year: 'numeric' , month: 'short' , day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                         </li>
                         </Fade>
                    );
                    
                })}
                </Stagger>
                </ul>
            <CommentForm postComment={postComment} dishId={dishId}/>
            </div>
            );
    }

    function DishDetail  (props) {
        if(props.isLoading){
            return (
                <div className="container">
                   <div className="row">
                       <Loading />
                   </div>
                </div>
            );
        }
        
        else if(props.ErrMsg){
            return(
                <div className="container">
                   <div className="row">
                       <h4>{props.ErrMsg}</h4>
                   </div>
                </div>
            );
        }

        else {
        if(props.dish!=null){
                return (
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                             <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                       <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                        <div className="row">
                            <RenderDish dish={props.dish} />
                            <RenderComment comments={props.comments} postComment={props.postComment} dishId={props.dish.id}/>
                    </div>
                    </div>    
                );
            }
        }
    }

export default DishDetail;