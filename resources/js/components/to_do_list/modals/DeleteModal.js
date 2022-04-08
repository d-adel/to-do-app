import axios from 'axios';
import React, {Component} from 'react';
import {toast} from 'react-toastify';

class DeleteModal extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem = () => {
        let self = this;
        axios.delete('/delete/item/' + this.props.modalId, {
            id : this.props.modalId,
        }).then(() => {
            toast.success("Taak verwijderd!");
            self.props.onChange();
        });
    }

    render() {
        return (
            <div className="modal fade" id={"deleteModal"+this.props.modalId} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel">Verwijderen</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Weet u zeker dat u deze taak wilt verwijderen?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sluiten</button>
                            <input type="button" className="btn btn-primary" value="Doorgaan" data-bs-dismiss="modal" onClick={this.deleteItem}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteModal;
