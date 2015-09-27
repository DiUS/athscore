import React, { Component } from 'react';
import $ from 'jquery';
import OrganiserList from './organiserlist.jsx';
import Login from './login.jsx';

export default class AuthO extends Component {

    componentWillMount() {
        this.lock = new Auth0Lock('zLC87Puc7r6WeMuIl5a95uF9DLKljZbr', 'athscore.au.auth0.com');
        this.setState({idToken: this.getIdToken()});
        this.setupAjax();
    }

    setupAjax() {
        $.ajaxSetup({
            'beforeSend': function(xhr) {
                if (localStorage.getItem('userToken')) {
                    xhr.setRequestHeader('Authorization',
                                         'Bearer ' + localStorage.getItem('userToken'));
                }
            }
        });
    }

    getIdToken() {
        var idToken = localStorage.getItem('userToken');
        var authHash = this.lock.parseHash(window.location.hash);
        if (!idToken && authHash) {
            if (authHash.id_token) {
                idToken = authHash.id_token
                localStorage.setItem('userToken', authHash.id_token);
            }
            if (authHash.error) {
                console.log("Error signing in", authHash);
                return null;
            }
        }
        return idToken;
    }

    render() {
        if (this.state.idToken) {
            return (<OrganiserList lock={this.lock} idToken={this.state.idToken} />);
        } else {
            return (<Login lock={this.lock} />);
        }
    }

}
