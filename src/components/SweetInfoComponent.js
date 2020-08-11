import React, { Component } from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class SweetInfo extends Component {
    constructor(props){
        super(props);
    }

    renderSweet(sweet){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={sweet.image} alt={sweet.name} />
                    <CardBody>
                        <CardTitle>{sweet.name}</CardTitle>
                        <CardText>{sweet.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    render(){
        if(this.props.sweet){
            return (
                <div className= "container">
                    <div className= "row">
                        {this.renderSweet(this.props.sweet)}
                    </div>
                </div>
            );
        }
        return <div/>;
    }
}

export default SweetInfo; 