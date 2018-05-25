
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

	switch (action.type) {
		case FETCH_WEATHER:
			// RETURN NEW STATE ARRAY BY ADDING ACTION DATA INTO CURRENT STATE ARRAY
			return [ action.payload.data, ...state ];
	}

	return state;
}