// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';
// IMPORT CHART COMPONENT
import Chart from '../components/chart';

// CREATE WEATHERLIST CONTAINER
class WeatherList extends Component {
	// CREATE RENDERWEATHER FUNCTION
	renderWeather(cityData) {
		// CREATE WEATHER DATA VARIABLES
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => ((weather.main.temp - 273.15) * 1.8) + 32);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		// RETURN WEATHER DATA
		return (
			<tr key={name} className="row">
				<td className="col-xs-3">{name}</td>
				<td className="col-xs-3"><Chart data={temps} color="orange" units="&deg;F" /></td>
				<td className="col-xs-3"><Chart data={pressures} color="green" units="hPa" /></td>
				<td className="col-xs-3"><Chart data={humidities} color="black" units="%" /></td>
			</tr>
		);
	}
	// RENDER COMPONENT METHOD
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr className="row">
						<th className="col-xs-3">City</th>
						<th className="col-xs-3">Temperature (&deg;F)</th>
						<th className="col-xs-3">Pressure (hPa)</th>
						<th className="col-xs-3">Humidity (%)</th>
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
