import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

//Week3-Presentational and Container Components. Passing onClick as props
//Week 3- Functional Components
function RenderDirectoryItem({sweet}) {
    return (
        <Card>
            <Link to={`/directory/${sweet.id}`}>
                <CardImg width="400" height="400" src={sweet.image} alt={sweet.name} />
                <CardImgOverlay>
                    <CardTitle>{sweet.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.sweets.map(sweet => {
        return (
            <div key={sweet.id} className="col-md-5 m-1">
                <RenderDirectoryItem sweet={sweet} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;