// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

// CREATE WEATHERLIST CONTAINER
class WeatherList extends Component {
	// CREATE RENDERWEATHER FUNCTION
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp)

		// RETURN WEATHER DATA
		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Sparklines height={120} width={180} data={temps}>
						<SparklinesLine color="red" />
					</Sparklines>
				</td>
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
