import React, { Component } from 'react';
import './Expense.css';
import { Button, Grid, Row, Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import moment from 'moment';

export default class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment()
        };
    }

    handleChange(date) {
        this.setState({
            date: date
        });
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="Expense">
                <form>
                    <Grid>
                        <Row>
                            <FormGroup controlId="season">
                                <ControlLabel>Season</ControlLabel>
                                <FormControl componentClass="select" label="Season">
                                    <option value="">Select season</option>
                                    <option value="spring2018">Spring 2018</option>
                                    <option value="summer2018">Summer 2018</option>
                                </FormControl>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup controlId="name">
                                <ControlLabel>Name</ControlLabel>
                                <FormControl id="name" type="text" label="Name" placeholder="Enter your name" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup controlId="amount">
                                <ControlLabel>Amount</ControlLabel>
                                <FormControl id="amount" type="text" label="Amount" placeholder="Enter amount" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup controlId="description">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl id="description" type="text" label="Description" placeholder="Enter description" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup controlId="date">
                                <ControlLabel>Date</ControlLabel>
                                <DatePicker onChange={this.onChange} selected={this.state.date} />
                            </FormGroup>
                        </Row>
                        <Row>
                            <div class="btn-toolbar">
                                <Button bsStyle="info"> Clear </Button>
                                <Button bsStyle="primary"> Add </Button>
                            </div>
                        </Row>
                    </Grid>
                </form>
            </div>
        );
    }
}