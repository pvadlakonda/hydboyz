import React from 'react';
import XLSX from 'xlsx';

export default class ImportComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    fileSelect(event) {
        console.log(event.target.files[0].name);
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = function (event) {
            var data = event.target.result;
            var workbook = XLSX.read(data, { type: 'binary' });
            workbook.SheetNames.forEach(function (sheetName) {
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                var json_object = JSON.stringify(XL_row_object);
                console.log(json_object);
                // this.props.submittedData(json_object);
            })
        };

        reader.onerror = function (ex) {
            console.log(ex);
        };
    }

    render() {
        return (
            <div>
                <label className="btn btn-default btn-file">
                    Browse <input type="file" onChange={this.fileSelect} />
                </label>
            </div>
        );
    }
}