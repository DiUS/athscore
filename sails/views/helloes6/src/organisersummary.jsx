import React, { Component } from 'react';

export default class OrganiserSummary extends Component {
    render() {
        return ( 
            <div>
                description: {this.props.org.description}<br/>
                address: {this.props.org.address}<br/>
                contact: {this.props.org.contact}<br/>
            </div>
        )} 
}
