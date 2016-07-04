import _ from 'lodash';
import moment from 'moment';

import { ADD_TRANSACTIONS, DEPOSIT, WITHDRAW } from '../actions/';

const transaction = (state, action) => {
    switch(action.type) {
        case DEPOSIT:
        case WITHDRAW:
            return {
                //id: action.id,
                text: action.text,
                amount: action.amount,
                balance: action.balance,
                timestamp: moment().format()
            };
        default:
            return state;
    }
}

const transactions = (state=[], action) => {
    switch(action.type) {
        case ADD_TRANSACTIONS:
            return _.concat(state, _.get(action, 'transactions', []));
        case WITHDRAW:
        case DEPOSIT:
            return [
                ...state,
                transaction(undefined, action)
            ];
        default:
            return state;
    }
}

export default transactions;