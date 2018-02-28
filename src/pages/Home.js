import React, { Component } from 'react';
import './myStyles.css';
import AddExpense from './AddExpense';
// import ExpenseTable from './ExpenseTable';
import PaginationTable from './DefaultPaginationTable';

export default class Home extends Component {
    state = {
        submittedData: {}
    };

    submittedData = (fields) => {
        // console.log(fields);
        this.setState({ submittedData: fields });
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
                <AddExpense submittedData={fields => this.submittedData(fields)} /> <br />
                <p>{JSON.stringify(this.state.submittedData)}</p>
                {/* <ExpenseTable submittedData={JSON.stringify(this.state.submittedData)} /> */}
                <PaginationTable submittedData={this.state.submittedData} />
            </div>
        );
    }
}