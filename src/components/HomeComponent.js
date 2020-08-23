import React, { Component } from 'react';
import { Card, CardGroup, CardText, CardBody, Button} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
import Comment from './CommentComponent';
import { NavLink } from 'react-router-dom';


// validation
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);




const items = [
    {
    src:"./assets/images/macaron.jpg",                   
    altText: 'Macarons',
    caption: 'Macarons',
    header: 'Macarons',
    //href: "/confectionery/macarons",
    key: '1'
    },
    {
    src: './assets/images/churros.jpg',
    altText: 'Churros',
    caption: 'Churros',
    header: 'Churros',
    key: '2'
    },
    {
    src: './assets/images/paleta.jpg',   
    altText: 'Paletas',
    caption: 'Paletas',
    header: 'Paletas',
    key: '3'
    }
  ];
  
const Example = () => <UncontrolledCarousel items={items} />;
// Is there use props? 
// center the carousel? 

function RenderCard({item}) {
    return (
        <Card>
            <CardBody>
                <CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. - Happy Customer </CardText>
            </CardBody>
        </Card>
    );
}


function Home(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md m-1">
                    <h1 align-self="center"> Sweet Cravings?</h1>
                    <h2>See some of the sweet spots in Downtown San Antonio</h2>
                    <br></br>
                    <Image className="candy" src="./assets/images/candy.jpg" fluid width="400" height="400" className="rounded mx-auto d-block"/>
                </div>
            </div>
            <br></br>
            <div className="row features">
                <div className="col">
                    <center>
                        <i className="fa fa-map-marker fa-4x" />
                    </center>
                    <h3>Support Local Business</h3>
                    <p>Most shops featured are local businesses in downtown San Antonio.</p>
                </div>
                <div className="col">
                    <center>
                        <i className="fa fa-money fa-4x" />
                    </center>                   
                    <h3>Reasonably priced</h3>
                    <p>Who says sweets have to be pricey?</p>
                </div>
                <div className="col">
                    <center>
                        <i className="fa fa-smile-o fa-4x" />
                    </center>   
                    <h3>Kid approved</h3>
                    <p>Guaranteed to put a smile on your face. </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md m-1">
                    <h1> Featured Treats</h1>
                    <Button color="info" tag={Link}to="/confectionery" size="lg"> Sweet Listings </Button>{' '}
                </div>
            </div>
            <div className="row">
                <UncontrolledCarousel items={items} />               
            </div>
            <br></br>
            <div className="row comment"> 
                <h2 className="text-light">Suggestions or Comments? We'd love to hear from you.</h2>
                <Comment />
            </div>
            <div className="row">
                <div className="col">
                    <h1>Testimonials </h1>
                    <CardGroup>
                        <RenderCard />
                        <RenderCard />
                        <RenderCard />
                    </CardGroup>
                </div>
            </div>
        </div>
    );
}

export default Home;  