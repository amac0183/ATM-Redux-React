import _ from 'lodash';

import { RECEIVE_DATA, RECEIVE_DONE, RECEIVE_ERROR, STATUS } from '../actions/';

const INIT_STATUS_STATE = {
	status: null,
	message: null
};

const status = (state = INIT_STATUS_STATE, action = {}) => {
	console.log(state);
	switch(action.type) {
		case RECEIVE_DATA:
			return {
				status: STATUS.LOADING,
				message: 'Loading'
			};
		case RECEIVE_DONE:
			return {
				status: STATUS.DONE_LOADING,
				message: _.get(action, 'message', '')
			};
		case RECEIVE_ERROR: 
			return {
				status: STATUS.ERROR,
				message: _.get(action, 'message', 'Unknown Error')
			};
		default:
			return state;
	};
};

export default status;