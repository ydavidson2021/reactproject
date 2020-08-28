import React, { Component } from 'react'; 
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.sweetId, values.rating, values.text);
        //console.log('Current state is: ' + JSON.stringify(values));
        //alert('Current state is: ' + JSON.stringify(values));
    }
    
    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-comment fa-lg" /> {' '}
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle= {this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rate Your Experience</Label>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control"> 
                                        <option>Excellent</option>
                                        <option>Somewhat Satisfied</option>
                                        <option>It's alright</option>
                                        <option>Somewhat Dissatisfied</option>
                                        <option>I don't agree. I have another place in mind</option>
                                    </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="reviewer">Name</Label>
                                <Control.text model=".reviewer" id="reviewer" name="reviewer"
                                    placeholder="Name"
                                    className="form-control"
                                    validators={{
                                        required, 
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".reviewer"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div> 
                            <div className="form-group">
                                <Label htmlFor="text" >Comment</Label>
                                <Control.textarea model=".text" id="text" name="text" className="form-control"
                                rows="6" />
                            </div>
                            <div className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </div>                     
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div> 
        );
    }
}

function RenderSweet({sweet}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={`/${sweet.image}`} width="300px" height="300px" alt={sweet.name} />
                <CardBody>
                    <CardText>{sweet.description} </CardText>
                    <a target="_blank" href={sweet.url}> {sweet.store}</a>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments, addComment, sweetId}){
    if(comments)
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return(<div><p>
                        {comment.text}
                        <br/>
                        -- {comment.reviewer}, 
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </p></div>)
                })}
            <CommentForm sweetId={sweetId} addComment={addComment} />
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
                            <BreadcrumbItem><Link to="/confectionery">Confectionery</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.sweet.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.sweet.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className = "row">
                    <RenderSweet sweet={props.sweet} />
                    <RenderComments 
                        comments={props.comments}
                        addComment={props.addComment}
                        campsiteId={props.sweet.id}
                    />
                </div>
            </div>
        );
    }
    return <div/>;
}

export default SweetInfo; 