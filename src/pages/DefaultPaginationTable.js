import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const products = [];

function addProducts(quantity) {
    for (let i = 0; i < quantity; i++) {
        products.push({
            id: i + 1,
            season: 'Season',
            date: '1/24/2018',
            amount: '25',
            name: 'Praveen ',
            description: 'Drinks'
        });
    }
}

addProducts(5);

function addProduct(submittedData) {
    if (Object.getOwnPropertyNames(submittedData).length === 0 || submittedData.name === '') {
        return;
    }
    products.push({
        id: products.length + 1,
        season: submittedData.season,
        date: submittedData.date,
        amount: submittedData.amount,
        name: submittedData.name,
        description: submittedData.description
    });
}

export default class DefaultPaginationTable extends React.Component {

    render() {
        console.log(this.props.submittedData);
        addProduct(this.props.submittedData);
        return (
            <div>
                <BootstrapTable
                    data={products}
                    pagination>
                    <TableHeaderColumn dataField='id' isKey={true}>#</TableHeaderColumn>
                    <TableHeaderColumn dataField='season'>Season</TableHeaderColumn>
                    <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}
