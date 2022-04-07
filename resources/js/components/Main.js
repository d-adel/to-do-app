import React from 'react';
import Table from './to_do_list/Table';
import CreateModal from './to_do_list/modals/CreateModal';

function Main() {
    return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner cover">
                <div className="lead">
                    <Table/>
                </div>
            </main>
        </div>
    );
}

export default Main;