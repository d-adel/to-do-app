import axios from 'axios';
import React, {Component} from 'react';

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description : null,
            file : null
        }

        this.createItem = this.createItem.bind(this);
    }

    onFileChange = files => {
        this.setState({
            file : files[0]
        })
      }

    inputDescription = (event) => {
        this.setState({
            description : event.target.value
        });
    }

    createItem = () => {
        let self = this;
        let fd = new FormData()
        fd.append("file", self.state.file);
        fd.append("description", self.state.description);
        axios.post('/create/item', fd)
        .then(() => {
            self.props.onChange();
        });
    }

    render() {
        return (
            <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createModalLabel">Nieuwe taak</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form'>
                                <div className='form-group'>
                                    <input type="text"
                                        id="description"
                                        className='form-control mb-3 pb-3'
                                        placeholder='Taak'
                                        value={this.state.description ?? ""}
                                        onChange={this.inputDescription}
                                    />
                                </div>
                                <div className='form-group'>
                                    <div>
                                        <input type="file" onChange={e => this.onFileChange(e.target.files)} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sluiten</button>
                            <input type="button" className="btn btn-primary" value="Opslaan" data-bs-dismiss="modal" onClick={this.createItem}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateModal;
