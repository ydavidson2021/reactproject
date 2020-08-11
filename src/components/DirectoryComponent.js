import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


// convert to presentational - no longer hold state data, no longer need constructor
class Directory extends Component {
   

    
    render() {
        const directory = this.props.sweets.map(sweet => {
            return (
                <div key={sweet.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(sweet.id)}>
                        <CardImg width="100%" height={500} src={sweet.image} alt={sweet.name} />
                        <CardImgOverlay>
                            <CardTitle>{sweet.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
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
}

export default Directory;