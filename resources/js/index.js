import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}