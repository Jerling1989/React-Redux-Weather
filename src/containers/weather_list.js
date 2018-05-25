// IMPORT OBJECT AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CREATE WEATHERLIST CONTAINER
class WeatherList extends Component {
	// CREATE RENDERWEATHER FUNCTION
	renderWeather(cityData) {
		const name = cityData.city.name;
		// RETURN NAME OF CITY
		return (
			<tr key={name}>
				<td>{name}</td>
			</tr>
		);
	}
	// RENDER COMPONENT METHOD
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// BIND WEATHER STATE FROM REDUCER_WEATHER TO CONTAINER
function mapStateToProps({ weather }) {
	return { weather };
}
// CONNECT REACT CONTAINER TO REDUX REDUCER
export default connect(mapStateToProps)(WeatherList);
