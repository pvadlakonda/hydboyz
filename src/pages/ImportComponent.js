import React from 'react';
import XLSX from 'xlsx';

export default class ImportComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            excelData: ''
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
            var XL_row_object = '';
            workbook.SheetNames.forEach((sheetName) => {
                XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            });
            console.log(XL_row_object);
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