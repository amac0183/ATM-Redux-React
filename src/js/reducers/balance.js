import { UPDATE_BALANCE } from '../actions/';

const balance = (state=0, action) => {
    switch(action.type) {
        case UPDATE_BALANCE:
            return balance - action.amount;
        default:
            return state;
    }
}

export default balance;