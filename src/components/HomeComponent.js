import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}


function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.sweet} />
                </div>
            </div>
        </div>
    );
}

export default Home;  