import React, {Component} from 'react';
import TableButtons from './TableButtons';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let success = this.props.data.finished ? 'table-success' : '';

        return (
            <tr className={success}>
                <th>{this.props.data.id}</th>
                <td>{this.props.data.item_description}</td>
                <td>
                    <TableButtons onChange={this.props.onChange} rowId={this.props.data.id} finished={this.props.data.finished}/>
                </td>
            </tr>
        );
    }
}

export default TableRow;
