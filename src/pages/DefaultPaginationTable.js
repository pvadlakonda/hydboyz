import React from 'react';
import './myStyles.css';
import { BootstrapTable, TableHeaderColumn, ExportCSVButton } from 'react-bootstrap-table';
import './../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import moment from 'moment';

const items = [];

function addDefaultItems(quantity) {
    for (let i = 0; i < quantity; i++) {
        items.push({
            id: i + 1,
            season: 'Season',
            date: '1/24/2018',
            amount: '25',
            name: 'Praveen ',
            description: 'Drinks'
        });
    }
}

function addItem(submittedData) {
    if (Object.getOwnPropertyNames(submittedData).length === 0 || submittedData.name === '') {
        return;
    }
    items.push({
        id: items.length + 1,
        season: submittedData.season,
        date: moment(submittedData.date).format('MM/DD/YYYY'),
        amount: submittedData.amount,
        name: submittedData.name,
        description: submittedData.description
    });
}

export default class DefaultPaginationTable extends React.Component {
    componentWillMount() {
        addDefaultItems(5);
    }

    handleExportCSVButtonClick = (onClick) => {
        onClick();
    }

    createCustomExportCSVButton = (onClick) => {
        return (
            <ExportCSVButton
                btnText='Export Items'
                btnContextual='btn-info'
                className='my-custom-class'
                // btnGlyphicon='glyphicon-edit'
                onClick={e => this.handleExportCSVButtonClick(onClick)} />
        );
    }

    render() {
        const options = {
            sizePerPage: 20,
            exportCSVBtn: this.createCustomExportCSVButton
        };

        console.log(this.props.submittedData);
        addItem(this.props.submittedData);

        return (
            <div className="text-left-align">
                <BootstrapTable
                    data={items}
                    pagination
                    options={options}
                    exportCSV >
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
