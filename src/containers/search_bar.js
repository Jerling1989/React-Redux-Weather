// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';

// CREATE SEARCHBAR CONTAINER
export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		// INITIALIZE STATE
		this.state = { term: '' };
		// BIND THIS CONTEXT TO ONINPUTCHANGE
		this.onInputChange = this.onInputChange.bind(this);
	}
	// CREATE ONINPUTCHANGE FUNCTION
	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}
	// FUNCTION TO RUN ON FORM SUBMISSION
	onFormSubmit(event) {
		event.preventDefault();

		// we need to go and fetch weather data
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