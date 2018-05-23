// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';

// CREATE SEARCHBAR CONTAINER
export default class SearchBar extends Component {
	render() {
		return (
			<form className="input-group">
				<input />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}