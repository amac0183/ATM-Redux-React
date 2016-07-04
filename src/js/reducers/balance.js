import { FETCH_BALANCE, UPDATE_BALANCE } from '../actions/action_types';

const balance = (state=0, action) => {
    switch(action.type) {
    	case FETCH_BALANCE:
    		return state;
        case UPDATE_BALANCE:
            return action.balance;
        default:
            return state;
    }
}

export default balance;