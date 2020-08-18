import React from 'react'; 
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSweet({sweet}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={`/${sweet.image}`} width="300px" height="300px" alt={sweet.name} />
                <CardBody>
                    <CardText>{sweet.description} </CardText>
                    <a target="_blank" href={sweet.url}> {sweet.store} </a>
                </CardBody>
            </Card>
        </div>
    );
}

function SweetInfo(props){
    if(props.sweet){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.sweet.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.sweet.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className = "row">
                    <RenderSweet sweet={props.sweet} />
                </div>
            </div>
        );
    }
    return <div/>;
}

export default SweetInfo; 