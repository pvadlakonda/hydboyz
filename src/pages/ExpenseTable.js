import React, { Component } from 'react';
import './myStyles.css';

export default class ExpenseTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [
                { 'season': 'Spring 2018', 'date': '1/12/2018', 'amount': '380', 'name': 'Praveen', 'description': 'Registration' },
                { 'season': 'Summer 2018', 'date': '1/25/2018', 'amount': '255', 'name': 'Ravi', 'description': 'Party Food' }
            ]
        }
    }

    render() {
        console.log(this.props.submittedData);
        // this.setState({
        // tableData: this.props.submittedData
        // });
        // this.state.tableData.push(this.props.submittedData);
        var result = this.state.tableData.map(function (row, index) {
            return <TableRow key={index} index={index} data={row} />
        });
        return (
            <div className="table-responsive">
                <table className="text-left-align table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Season</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result}
                    </tbody>
                </table>
            </div>
        );
    }
}

export class TableRow extends Component {
    render() {
        var row = this.props.data;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{row.season}</td>
                <td>{row.date}</td>
                <td>{row.amount}</td>
                <td>{row.name}</td>
                <td>{row.description}</td>
            </tr>
        );
    }
}