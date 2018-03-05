import React from 'react';
import $ from 'jquery';

const url = 'https://api.mlab.com/api/1/databases/hydboyz/collections/expenses?apiKey=2-byIVNo-oqo6Irfu3ywY1OkJW8GY_xh'
export default class MLabService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mongoData: ''
        };
        this.loadFromDB = this.loadFromDB.bind(this)
    }

    componentWillMount() {
        this.loadFromDB();
    }

    loadFromDB() {
        $.ajax({
            dataType: "json",
            type: "GET",
            url: url,
            success: (data) => {
                this.setState({
                    mongoData: data
                })

            }
        });
    }

    render() {
        return (
            <div>
                {this.props.mongoData(this.state.mongoData)}
            </div>
        );
    }
}