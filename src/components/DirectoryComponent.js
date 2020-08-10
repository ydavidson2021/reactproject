import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import SweetInfo from './SweetInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSweet: null
        };
    }

    onSweetSelect(sweet) {
        this.setState({selectedSweet: sweet});
    }
    render() {
        const directory = this.props.sweets.map(sweet => {
            return (
                <div key={sweet.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onSweetSelect(sweet)}>
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
                <SweetInfo sweet={this.state.selectedSweet} />
            </div>
        );
    }
}

export default Directory;