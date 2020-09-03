import React from 'react';
import {Card , CardImg , CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap'; 


function RenderCards ({item}){
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

function Home (props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1"><RenderCards item={props.dish} /></div>
                <div className="col-12 col-md m-1"><RenderCards item={props.promotion} /></div>
                <div className="col-12 col-md m-1"><RenderCards item={props.leaders} /></div>
            </div>
        </div>
    );
}

export default Home;