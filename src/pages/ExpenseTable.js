import React from 'react';
import './myStyles.css';
import { BootstrapTable, TableHeaderColumn, DeleteButton } from 'react-bootstrap-table';
import './../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Workbook from 'react-excel-workbook';
// import ImportComponent from './ImportComponent';

var deleteOn = false;
export default class ExpenseTable extends React.Component {
    state = {
        expenses: []
    };

    componentWillReceiveProps(nextProps) {
        this.loadDBData(nextProps.dbData);
    }

    loadDBData(data) {
        var dbItems = [];
        for (var i = 0; i < data.length; i++) {
            dbItems.push(this.addExpense(data[i], i));
        }
        this.setState({
            expenses: dbItems
        })
    }

    addExpense(submittedData, index) {
        console.log(submittedData);
        if (Object.getOwnPropertyNames(submittedData).length === 0 || submittedData.name === '') {
            return;
        }
        var newItem = {
            id: index + 1,
            season: submittedData.season,
            date: submittedData.date,
            amount: submittedData.amount,
            name: submittedData.name,
            description: submittedData.description
        };
        return newItem;
    }

    modifyTable() {
        deleteOn = !deleteOn;
        var elems = document.getElementsByClassName('react-bs-table-tool-bar');
        elems[0].style.display = deleteOn ? 'block' : 'none';

        var checkboxes = document.getElementsByTagName('input');
        for (let element of checkboxes) {
            if (element.type === "checkbox")
                element.style.display = deleteOn ? 'block' : 'none';
        }
    }

    render() {
        return (
            <div className="text-left-align">
                <PaginationBootstrapTable data={this.state.expenses} />
                {/* <div>
                    <button className="btn btn-primary" onClick={this.modifyTable}>Edit</button>
                </div> */}
                <ExportComponent data={this.state.expenses} />
                {/* <ImportComponent importRow={row => this.addExpense(row)} /> */}
            </div>
        );
    }
}

export class PaginationBootstrapTable extends React.Component {

    createCustomDeleteButton = (onClick) => {
        return (
            <DeleteButton
                btnText='Delete Selected'
                btnContextual='btn-warning'
                className='my-custom-class'
                btnGlyphicon='glyphicon-edit'
                onClick={() => this.handleDeleteButtonClick(onClick)}
            />
        );
    }
    handleDeleteButtonClick = (onClick) => {
        onClick();
    }
    render() {
        const options = {
            defaultSortName: 'id',
            defaultSortOrder: 'desc',
            sizePerPage: 10,
            deleteBtn: this.createCustomDeleteButton
        };
        const selectRowProp = {
            mode: 'checkbox',
            hideSelectColumn: true
        };
        return (
            <div>
                <BootstrapTable
                    data={this.props.data}
                    pagination
                    options={options}
                    deleteRow
                    selectRow={selectRowProp} >
                    <TableHeaderColumn width={'25'} dataField='id' isKey={true} dataSort={true}>#</TableHeaderColumn>
                    <TableHeaderColumn width={'120'} dataField='season'>Season</TableHeaderColumn>
                    <TableHeaderColumn width={'120'} dataField='date'>Date</TableHeaderColumn>
                    <TableHeaderColumn width={'75'} dataField='amount'>Amount</TableHeaderColumn>
                    <TableHeaderColumn width={'100'} dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn width={'150'} dataField='description'>Description</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export class ExportComponent extends React.Component {

    render() {
        return (
            <div className="text-center justify-content-md-center" style={{ marginBottom: '10px' }}>
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
