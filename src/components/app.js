// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
// IMPORT COMPONENTS AND CONTAINERS
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Header from '../components/header';

// CREATE MAIN APP COMPONENT
export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
