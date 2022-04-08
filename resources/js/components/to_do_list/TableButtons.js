import React, {Component} from 'react';
import UpdateModal from './modals/UpdateModal';
import DeleteModal from './modals/DeleteModal';
import {toast} from 'react-toastify';

class TableButtons extends Component {
    constructor (props) {
        super(props);
        this.updateFinished = this.updateFinished.bind(this);
    }

    updateFinished = () => {
        let finished = this.props.finished ? 0 : 1;
        let self = this;
        axios.post('/update/item/finished', {
            id : this.props.rowId,
            updateFinished : finished
        }).then(() => {
            finished ? toast.success("Taak afgerond!") : toast.success("Afronden ongedaan gemaakt!");
            self.props.onChange();
        });
    }

    render() {
        return (
            <div className="btn-group" role="group">
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target={'#updateModal'+this.props.rowId}>
                        Wijzigen
                    </button>

                <UpdateModal onChange={this.props.onChange} modalId={this.props.rowId} />

                <button 
                    type="button" 
                    className={this.props.finished ? "btn btn-warning" : "btn btn-success"}
                    onClick={this.updateFinished}>
                        {this.props.finished ? "Ongedaan maken" : "Afronden"}
                </button>

                <button 
                    type="button" 
                    className="btn btn-danger" 
                    data-bs-toggle="modal" 
                    data-bs-target={'#deleteModal'+this.props.rowId}>
                        Verwijderen
                </button>

                <DeleteModal onChange={this.props.onChange} modalId={this.props.rowId} />
            </div>
        );
    }
}

export default TableButtons;