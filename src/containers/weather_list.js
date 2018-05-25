import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
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

				</tbody>
			</table>
		);
	}
}

// BIND FETCHWEATHER ACTION CREATOR TO DISPATCH
function mapStateToProps({ weather }) {
	return { weather };
}
// CONNECT REACT CONTAINER TO REDUX REDUCERS
export default connect(mapStateToProps)(WeatherList);
