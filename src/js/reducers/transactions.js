import { DEPOSIT, WITHDRAW } from '../actions/';

const transaction = (state, action) => {
    switch(action.type) {
        case DEPOSIT:
            return {
                //id: action.id,
                text: 'Deposit',
                amount: action.amount,
                balance: action.balance
            };
        case WITHDRAW:
            return {
                //id: action.id,
                text: 'Withdraw',
                amount: action.amount,
                balance: action.balance
            };
        default:
            return state;
    }
}

const transactions = (state=[], action) => {
    switch(action.type) {
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