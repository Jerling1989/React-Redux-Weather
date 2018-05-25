// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// IMPORT ACTION CREATOR
import { fetchWeather } from '../actions/index';

// CREATE SEARCHBAR CONTAINER
class SearchBar extends Component {
	constructor(props) {
		super(props);
		// INITIALIZE STATE
		this.state = { term: '' };
		// BIND THIS CONTEXT TO METHODS
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	// CREATE ONINPUTCHANGE FUNCTION
	onInputChange(event) {
		this.setState({ term: event.target.value });
	}
	// FUNCTION TO RUN ON FORM SUBMISSION
	onFormSubmit(event) {
		event.preventDefault();
		// GO AND FETCH WEATHER DATA
		this.props.fetchWeather(this.state.term);
		// CLEAR THE SEARCH BAR
		this.setState({ term: '' });
	}
	// RENDER COMPONENT METHOD
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}
// BIND FETCHWEATHER ACTION CREATOR TO DISPATCH
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}
// CONNECT CONTAINER TO REDUX REDUCERS
export default connect(null, mapDispatchToProps)(SearchBar);









