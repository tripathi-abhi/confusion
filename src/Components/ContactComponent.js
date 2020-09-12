import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormFeedback, Button, Col, Input, FormGroup, Label } from 'reactstrap';
import{ Link } from 'react-router-dom';

class Contact extends Component {
constructor(props){
    super(props);

    this.state ={
        firstName: '',
        lastName: '',
        telNum:'',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message:'',
        touched: {
            firstName: false,
            lastName: false,
            telNum: false,
            email: false
        }
       }
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleBlur = this.handleBlur.bind(this);
       this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        });

    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate(firstName, lastName, telNum, email) {
        const errors = {
            firstName:'',
            lastName:'',
            telNum:'',
            email:''
        };

        if(this.state.touched.firstName && (firstName.length<3 || firstName.length>10)){
            errors.firstName = " First Name should be between 3 (min.) to 10 (max.) chracters";
        }

        if(this.state.touched.lastName && (lastName.length<3 || lastName.length>10)){
            errors.lastName = " Last Name should be between 3 (min.) to 10 (max.) chracters";
        }

        const reg = /^\d{10}$/;
        if(this.state.touched.telNum && !reg.test(telNum)){
            errors.telNum = "Tel. Number should contain only numbers (length 10)";
        }
        const correctEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.state.touched.email && !correctEmail.test(email)){
            errors.email = "Email must be of the form xyz@abc.ab";
        }

        return errors;
    }

    handleSubmit(event){
        console.log("The current state is: "+ JSON.stringify(this.state));
        event.preventDefault();

    }

    render(){
    const errors= this.validate(this.state.firstName,this.state.lastName,this.state.telNum,this.state.email);
    return(
        <div className="container">
            <div className="row">
                    <Breadcrumb>
                       <BreadcrumbItem>
                       <Link to="/home">Home</Link>
                       </BreadcrumbItem>
                       <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="#"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send Us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form row onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstName" name="firstName" placeholder="First Name"
                                value={this.state.firstName} valid= {errors.firstName === ''} invalid= {errors.firstName !== ''} onBlur={this.handleBlur('firstName')} onChange={this.handleInputChange} />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastName" name="lastName" placeholder="Last Name"
                                value={this.state.lastName} valid= {errors.lastName === ''} invalid= {errors.lastName !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('lastName')} />
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telNum" md={2}>Tel. Number</Label>
                            <Col md={10}>
                                <Input type="tel" id="telNum" name="telNum" placeholder="Tel Num"
                                value={this.state.telNum} valid= {errors.telNum === ''} invalid= {errors.telNum !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('telNum')} />
                                <FormFeedback>{errors.telNum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email" placeholder="email@adc.ab"
                                value={this.state.email} valid= {errors.email === ''} invalid= {errors.email !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('email')} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6 , offset:2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} /> {' '}
                                        <strong>We may contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3 , offset:1}}>
                                <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange} >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input rows="10" type="textarea" id="message" name="message" placeholder="Type your feedback here"
                                value={this.state.message} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
    }
}

export default Contact;