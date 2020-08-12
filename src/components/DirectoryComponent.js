import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

//Week3-Presentational and Container Components. Passing onClick as props
//Week 3- Functional Components
function RenderDirectoryItem({sweet}) {
    return (
        <Card>
            <CardImg width="500px" height="500px" src={sweet.image} alt={sweet.name} />
            <CardImgOverlay>
                <CardTitle>{sweet.name}</CardTitle>
            </CardImgOverlay>
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
                {directory}
            </div>
        </div>
    );
}

export default Directory;