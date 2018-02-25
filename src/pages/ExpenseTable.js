import React, { Component } from 'react';
import './ExpenseTable.css';

export default class ExpenseTable extends Component {

    render() {
        return (
            <div className="table-responsive">
                <table className="ExpenseTable table table-sm">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Spring 2018</td>
                            <td>1/2/2018</td>
                            <td>380</td>
                            <td>Praveen</td>
                            <td>Registration</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Spring 2018</td>
                            <td>2/12/2018</td>
                            <td>80</td>
                            <td>CD</td>
                            <td>Indoor Practice</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Spring 2018</td>
                            <td>1/24/2018</td>
                            <td>250</td>
                            <td>Arun</td>
                            <td>Cricket Party Drinks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
