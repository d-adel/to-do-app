import React, {Component} from 'react';

class ViewModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal fade" id={"viewModal"+this.props.modalId} tabIndex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="viewModalLabel">Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <p>{'Taak:   ' + this.props.description}</p>
                        <img src={'/storage/images/'+this.props.image} alt='Geen afbeelding beschikbaar' className="img-thumbnail" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sluiten</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewModal;
