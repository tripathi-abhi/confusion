import React from 'react';
import {Card , CardImg , CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap'; 
import { Loading } from './LoaderComponent.js';

function RenderCards ({item,isLoading,ErrMsg}){
    if(isLoading){
        return (
                <Loading />
        );
    }
    else if(ErrMsg){
        return(
                <h4>{ErrMsg}</h4>
        );
    }
    else {
    return(
        <Card>
            <CardImg src={item.image}></CardImg>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
     );
    }
}

function Home (props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1"><RenderCards item={props.dish}
                isLoading={props.dishesLoading}
                ErrMsg= {props.dishesErrMsg}
                /></div>
                <div className="col-12 col-md m-1"><RenderCards item={props.promotion} /></div>
                <div className="col-12 col-md m-1"><RenderCards item={props.leaders} /></div>
            </div>
        </div>
    );
}

export default Home;