import React from 'react';
import './myStyles.css';
import AddExpense from './AddExpense';
import ExpenseTable from './ExpenseTable';
// import MLabService from './../services/MLabService';
import $ from 'jquery';

const url = 'https://api.mlab.com/api/1/databases/hydboyz/collections/expenses?apiKey=2-byIVNo-oqo6Irfu3ywY1OkJW8GY_xh'
export default class ExpenseHome extends React.Component {
    state = {
        dbData: {}
    };

    componentDidMount() {
        this.loadFromDB();
    }

    submitData(fields) {
        $.ajax({
            url: url,
            data: JSON.stringify({
                "season": fields.season,
                "amount": fields.amount,
                "date": fields.date,
                "name": fields.name,
                "description": fields.description
            }),
            type: "POST",
            contentType: "application/json",
            success: (data) => {
                this.loadFromDB();
            }
        });
    }

    loadFromDB() {
        $.ajax({
            dataType: "json",
            type: "GET",
            url: url,
            success: (data) => {
                this.setState({ dbData: data })
            }
        });
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1>HyderabadBoyz</h1>
                        <p className="lead">Add your expenses</p>
                    </div>
                </div>
                <AddExpense submittedData={fields => this.submitData(fields)} /> <br />
                <ExpenseTable dbData={this.state.dbData} />
                {/* <MLabService mongoData={data => this.mongoData(data)} /> */}
            </div>
        );
    }
}