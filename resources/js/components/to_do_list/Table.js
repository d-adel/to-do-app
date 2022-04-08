import axios from 'axios';
import React, { Component } from 'react';
import CreateModal from './modals/CreateModal';
import TableRow from './TableRow';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [],
        }
        this.setToDoList = this.setToDoList.bind(this);
    }

    componentDidMount() {
        this.setToDoList();
    }

    /**
     * Fetches all items from the database and appends them to the to-do list.
     * This function is called whenever a change is made to this component state.
    */
    setToDoList = () => {
        let self = this;
        axios.get('/get/todolist').then(function (response) {
            self.setState(() => {
                return {items: response.data};
              });
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="cover-heading">To-Do Lijst</h1>
                {/* When clicked creates a new task in the CreateModal component */}
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target={'#createModal'}>
                        Nieuwe Taak
                </button>
                <CreateModal onChange={this.setToDoList} />

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Beschrijving</th>
                            <th scope="col">Acties</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Maps item data to each row in the table */}
                        {this.state.items.map((x, i) => {
                          return <TableRow key={i} data={x} onChange={this.setToDoList}/>;
                        })}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;