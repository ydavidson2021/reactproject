import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


//Week3-Presentational and Container Components. Passing onClick as props
//Week 3- Functional Components

function RenderConfectioneryItem({sweet}) {
    return (
        <Card>
            <Link to={`/confectionery/${sweet.id}`}>
                <CardImg width="400" height="400" src={sweet.image} alt={sweet.name} />
                <CardImgOverlay>
                    <CardTitle>{sweet.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Confectionery(props) {

    const confectionery = props.sweets.map(sweet => {
        return (
            <div key={sweet.id} className="col-md-5 m-1">
                <RenderConfectioneryItem sweet={sweet} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Confectionery</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Confectionery</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {confectionery}
            </div>
        </div>
    );
}

export default Confectionery;