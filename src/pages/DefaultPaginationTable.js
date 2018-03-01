import React from 'react';
import './myStyles.css';
import { BootstrapTable, TableHeaderColumn, ExportCSVButton } from 'react-bootstrap-table';
import './../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import moment from 'moment';
import Workbook from 'react-excel-workbook';

export default class DefaultPaginationTable extends React.Component {
    items = [];

    componentWillMount() {
        this.loadItems(5);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.addItem(nextProps.submittedData);
    }

    loadItems(quantity) {
        for (let i = 0; i < quantity; i++) {
            this.items.push({
                id: i + 1,
                season: 'Season',
                date: '1/24/2018',
                amount: '25',
                name: 'Praveen ',
                description: 'Drinks'
            });
        }
    }

    addItem(submittedData) {
        if (Object.getOwnPropertyNames(submittedData).length === 0 || submittedData.name === '') {
            return;
        }
        var newItem = {
            id: this.items.length + 1,
            season: submittedData.season,
            date: moment(submittedData.date).format('MM/DD/YYYY'),
            amount: submittedData.amount,
            name: submittedData.name,
            description: submittedData.description
        };
        this.items.push(newItem);
    }

    handleExportCSVButtonClick = (onClick) => {
        onClick();
    }

    createCustomExportCSVButton = (onClick) => {
        return (
            <ExportCSVButton
                btnText='Export to csv'
                btnContextual='btn-info'
                className='my-custom-class'
                btnGlyphicon='glyphicon glyphicon-export'
                onClick={e => this.handleExportCSVButtonClick(onClick)} />
        );
    }

    render() {
        const options = {
            defaultSortName: 'id',
            defaultSortOrder: 'desc',
            sizePerPage: 10,
            exportCSVBtn: this.createCustomExportCSVButton
        };

        return (
            <div className="text-left-align">
                <BootstrapTable
                    data={this.items}
                    pagination
                    options={options}
                    exportCSV
                    csvFileName='table-export'>
                    <TableHeaderColumn dataField='id' isKey={true} dataSort={true}>#</TableHeaderColumn>
                    <TableHeaderColumn dataField='season'>Season</TableHeaderColumn>
                    <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                </BootstrapTable>

                <ExportComponent data={this.items} />
            </div>
        );
    }
}

export class ExportComponent extends React.Component {

    render() {
        return (
            <div className="row text-center justify-content-md-center" style={{ marginBottom: '10px' }}>
                <Workbook filename="table-data.xlsx" element={<button className="btn btn-primary">Export to excel</button>}>
                    <Workbook.Sheet data={this.props.data} name="Sheet A">
                        <Workbook.Column label="ID" value="id" />
                        <Workbook.Column label="Season" value="season" />
                        <Workbook.Column label="Date" value="date" />
                        <Workbook.Column label="Amount" value="id" />
                        <Workbook.Column label="Name" value="season" />
                        <Workbook.Column label="Description" value="date" />
                    </Workbook.Sheet>
                </Workbook>
            </div>
        );
    }
}