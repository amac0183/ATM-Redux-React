import { combineReducers } from 'redux';
import balance from './balance';
import status from './status';
import transactions from './transactions';

const rootReducers = combineReducers({
	balance,
	status,
	transactions,
});

export default rootReducers;