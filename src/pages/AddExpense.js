import React, { Component } from 'react';
import './myStyles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const initialState = {
    season: '',
    dateObj: moment(),
    date: moment().format('MM/DD/YYYY'),
    amount: '',
    name: '',
    description: ''
};

export default class AddExpense extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submittedData(this.state);
        this.reset();
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleDateChange(dateObj) {
        this.setState({
            dateObj: dateObj,
            date: moment(dateObj).format('MM/DD/YYYY')
        });
    }
    reset() {
        this.setState(initialState);
    }

    render() {
        return (
            <div className="text-left-align">
                <form onSubmit={this.handleSubmit}>
                    <div className="row justify-content-md-center">
                        <div className="col col-sm-4 form-group">
                            <label htmlFor="season">Season</label>
                            <select className="form-control" value={this.state.season} id="season" onChange={this.handleChange}>
                                <option value="">Select season</option>
                                <option value="spring2018">Spring 2018</option>
                                <option value="summer2018">Summer 2018</option>
                            </select>
                        </div>
                        <div className="col col-sm-2 form-group" >
                            <label htmlFor="amount">Amount</label>
                            <input type="text" value={this.state.amount} onChange={this.handleChange} className="form-control" id="amount" placeholder="Enter Amount" />
                        </div>
                        <div className="col col-sm-4 form-group">
                            <label htmlFor="date">Date</label>
                            <DatePicker id="date" maxDate={moment()} onChange={this.handleDateChange} selected={this.state.dateObj} />
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col col-sm-4 form-group" >
                            <label htmlFor="name">Name</label>
                            <input type="text" style={{ width: 345 }} value={this.state.name} onChange={this.handleChange} className="form-control" id="name" placeholder="Enter Name" />
                        </div>
                        <div className="col col-sm-8 form-group" >
                            <label htmlFor="description">Description</label>
                            <input type="text" value={this.state.description} onChange={this.handleChange} className="form-control" id="description" placeholder="Enter Description" />
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="btn-group mr-2" role="group">
                            <button type="reset" onClick={this.reset} className="btn btn-secondary">Clear</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}
