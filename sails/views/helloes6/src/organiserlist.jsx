import React, { Component } from 'react';
import $ from 'jquery';
import OrganiserSummary from './organisersummary.jsx'

export default class OrganiserList extends Component {

  constructor() {
     super();
       this.state = {
         organisers: [], 
         loadingCount : 0 
       }
  }

  loadOrganisersFromAPI() {
    $.get('/organisers', function (result) {
       if(!this.unmounted) {
            this.setState({ organisers: result });
       }
    }.bind(this));
  }
 
  componentDidMount() {
    this.loadOrganisersFromAPI();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return ( 
      <div>
        <h1>Hello World</h1>
        <ul>
            {this.state.organisers.map(function (thing) {
                return (
                    <div>
                      <li key={thing.id}>{thing.name}</li>
                      <OrganiserSummary  org={thing} />;
                    </div>);
             })}
        </ul>
      </div>
   );


  }
}

