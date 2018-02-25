import React, { Component } from 'react';
import './Expense.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export default class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        console.log(date);
        this.setState({
            date: date
        });
    }

    render() {
        return (
            <div className="Expense">
                <form>
                    <div className="row justify-content-md-center">
                        <div className="col col-sm-4 form-group">
                            <label htmlFor="season">Season</label>
                            <select className="form-control" id="season">
                                <option value="spring2018">Spring 2018</option>
                                <option value="summer2018">Summer 2018</option>
                            </select>
                        </div>
                        <div className="col col-sm-4 form-group">
                            <label htmlFor="date">Date</label>
                            <DatePicker onChange={this.handleChange} selected={this.state.date} />
                        </div>
                        <div className="col col-sm-2 form-group">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" className="form-control" id="amount" placeholder="Your amount" />
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col col-sm-4 form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="col col-sm-8 form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" id="description" placeholder="Description" />
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col col-sm-6 btn-toolbar" role="toolbar">
                            <div className="btn-group mr-2" role="group">
                                <button type="button" className="btn btn-secondary">Clear</button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}