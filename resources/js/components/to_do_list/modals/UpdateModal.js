import axios from 'axios';
import React, {Component} from 'react';

class UpdateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description : null
        }

        this.updateItem = this.updateItem.bind(this);
    }

    inputDescription = (event) => {
        this.setState({
            description : event.target.value
        });
    }

    updateItem = () => {
        let self = this;
        axios.post('/update/item/description', {
            id : this.props.modalId,
            description : this.state.description,
        }).then(() => {
            self.props.onChange();
        });
    }

    render() {
        return (
            <div className="modal fade" id={"updateModal"+this.props.modalId} tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="updateModalLabel">Wijzigen</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form'>
                                <div className='form-group'>
                                    <input type="text"
                                        id="description"
                                        placeholder='Taak'
                                        value={this.state.description ?? ""}
                                        onChange={this.inputDescription}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sluiten</button>
                            <input type="button" className="btn btn-primary" value="Wijzigen" data-bs-dismiss="modal" onClick={this.updateItem}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateModal;
