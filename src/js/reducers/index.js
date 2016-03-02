import { combineReducers } from 'redux';
import balance from './balance';
import transactions from './transactions';

const rootReducers = combineReducers({
	balance,
	transactions
});

export default rootReducers;