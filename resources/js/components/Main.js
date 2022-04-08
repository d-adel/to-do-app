import React from 'react';
import Table from './to_do_list/Table';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Main() {
    return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner cover">
                <div className="lead">
                    <Table/>
                </div>
            </main>
            <ToastContainer
                position="top-left"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Main;