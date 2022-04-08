import React, {Component} from 'react';
import TableButtons from './TableButtons';
import ViewModal from './modals/ViewModal'

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
                <td>
                {/* When clicked the item description and the corresponding image of this item will be displayed*/}
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-toggle="modal" 
                    data-bs-target={'#viewModal'+this.props.data.id}>
                        Details
                </button>
                <ViewModal description={this.props.data.item_description} image={this.props.data.file_name} modalId={this.props.data.id} />
                </td>
            </tr>
        );
    }
}

export default TableRow;
