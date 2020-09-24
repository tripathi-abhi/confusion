import React, { Component } from 'react';
import { Navbar, NavbarBrand , Jumbotron, Nav, NavbarToggler, NavItem, Collapse, Modal, Button, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, Errors, LocalForm} from 'react-redux-form'

const required = (val) => val && val.length;
class Header extends Component {

    constructor(props){
        super(props);
        this.state= {
            isNavOpen: false,
            isModalOpen: false
            
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
 
        });
    }

    handleLogin(values){
        this.toggleModal();
        alert("The state is: " + JSON.stringify(values) );
    }

    render(){
        return(
            <React.Fragment>
            <Navbar dark expand="md">
                <div className="container">
                <NavbarToggler onClick = {this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/">
                    <img src="/assets/images/logo.png" height="30" width="41" alt="logo"></img>
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                    </NavItem>      
                </Nav>
                
                </Collapse>
                <Nav className="ml-auto">
                <NavItem>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"></span>Sign In
                        </Button>
                </NavItem>
                </Nav>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Restorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={this.handleLogin}>
                        <Row className="form-group">
                            <Label htmlFor="username" md={12}>Username</Label>
                            <Col md={12}>
                            <Control.text model=".username" name="username"
                            className="form-control"
                            validators={{
                                required,
                            }}
                            />
                            <Errors 
                            className="text-danger"
                            model=".username"
                            show="touched"
                            messages={{
                                required: "* Required field",
                            }}
                            />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="password" md={12}>Password</Label>
                            <Col md={12}>
                            <Control.password model=".password" name="password"
                            className="form-control"
                            validators={{
                                required,
                            }}
                            />
                            <Errors 
                            className="text-danger"
                            model=".password"
                            show="touched"
                            messages={{
                                required: "* Required field",
                            }}
                            />
                            </Col>
                        </Row>
                        <Row className="form-check">
                            <Label check htmlFor="remember">
                            <Control.checkbox model=".remember" name="remember"
                            />
                            Remember me
                            </Label>
                        </Row>
                        <Row className="form-group mt-1">
                            <Col md={12}>
                            <Button type="submit" value="submit" color="primary">Login In</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </React.Fragment>
        );

    }
}

export default Header;