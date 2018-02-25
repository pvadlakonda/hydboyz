import React, { Component } from 'react';
import './AddExpense.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export default class AddExpense extends Component {
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
            <div className="AddExpense">
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
                        <InputDiv class="col col-sm-2 form-group" id="amount" label="Amount" placeholder="Enter Your Amount" />
                    </div>
                    <div className="row justify-content-md-center">
                        <InputDiv class="col col-sm-4 form-group" id="name" label="Name" placeholder="Enter Your Name" />
                        <InputDiv class="col col-sm-8 form-group" id="description" label="Description" placeholder="Description" />
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

function InputDiv(props) {
    return (
        <div className={props.class}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" className="form-control" id={props.id} placeholder={props.placeholder} />
        </div>
    );
}