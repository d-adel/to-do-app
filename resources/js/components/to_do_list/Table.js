import axios from 'axios';
import React, { Component, useState } from 'react';
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
                <button 
                    type="button" 
                    className="btn btn-secondary" 
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
                        </tr>
                    </thead>
                    <tbody>
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