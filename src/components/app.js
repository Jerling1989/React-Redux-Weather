// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
// IMPORT COMPONENTS AND CONTAINERS
import SearchBar from '../containers/search_bar';

// CREATE MAIN APP COMPONENT
export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      </div>
    );
  }
}
