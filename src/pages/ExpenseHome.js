import React from 'react';
import './myStyles.css';
import AddExpense from './AddExpense';
import ExpenseTable from './ExpenseTable';
// import MLabService from './../services/MLabService';
import $ from 'jquery';

const url = 'https://api.mlab.com/api/1/databases/hydboyz/collections/expenses?apiKey=2-byIVNo-oqo6Irfu3ywY1OkJW8GY_xh'
export default class ExpenseHome extends React.Component {
    state = {
        submittedData: {}
    };

    componentDidMount() {
        this.loadFromDB();
    }

    submitData = (fields) => {
        this.setState({ submittedData: fields });
    }

    loadFromDB() {
        $.ajax({
            dataType: "json",
            type: "GET",
            url: url,
            success: (data) => {
                for (var i = 0; i < data.length; i++) {
                    this.setState({ submittedData: data[i] });
                }
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
                <ExpenseTable submittedData={this.state.submittedData} />
                {/* <MLabService mongoData={data => this.mongoData(data)} /> */}
            </div>
        );
    }
}