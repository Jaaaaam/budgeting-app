
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './layout/nav'

export default class App extends Component {
    render() {
        console.log('IM MOUNTED')
        return (
            <div>
                <Nav></Nav>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
