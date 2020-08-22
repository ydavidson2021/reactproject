import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

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
                    <h1 align-self="center"> Sweet Cravings?</h1>
                    <h2>Looking for sweet spots in Downtown San Antonio?</h2>
                    <Image className="candy" src="./assets/images/candy.jpg" fluid width="400" height="400" className="rounded mx-auto d-block"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md m-1">
                    <h1 align-self="center"> Sample Treats</h1>
                    <h2>Sweet Tooth Fairy GPS has the answer!</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <Image src="./assets/images/macaron.jpg" width="350"  height="350" roundedCircle className="mx-auto d-block" />                   
                    <Link to="/confectionery/macaron"> <h3 className="feature-title">Macarons</h3></Link>

                </div>
                <div className="col-lg-4">
                    <Image src="./assets/images/churros.jpg" width="350"  height="350" roundedCircle className="mx-auto d-block" />
                    <Link to="/confectionery/churros"> <h3 className="feature-title">Churros</h3></Link>
                </div>
                <div className="col-lg-4">
                    <Image src="./assets/images/paleta.jpg" width="350"  height="350" roundedCircle className="mx-auto d-block" />
                    <Link to="/confectionery/paleta"> <h3 className="feature-title">Paletas</h3></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;  