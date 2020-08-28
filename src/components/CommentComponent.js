import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

// validation
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Comment extends Component {
    constructor(props){
        super(props);

        this.state = {
            message:'', 
            email:'',
            name:'',
            agree: false, 
            touched: {
                name: false, 
                email: false
            }
        };
        //Week 4 - to bind and have the correct object 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-md-10">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Control.textarea model=".message" id="message" name="message" placeholder="Message"
                                        rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={5}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(30)
                                        }}
                                    />
                                    <Errors
                                        className="text-light"
                                        model=".name"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 30 characters or less'
                                        }}
                                    />
                                </Col>
                                <Col md={5}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-light"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Button type="submit" color="warning" size="lg">
                                        Send
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }   
}



export default Comment;

