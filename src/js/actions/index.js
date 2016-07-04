import _ from 'lodash';
import axios from 'axios';

import { ADD_TRANSACTIONS, CHECK_BALANCE, DEPOSIT, RECEIVE_DATA, RECEIVE_DONE,
	RECEIVE_ERROR, UPDATE_BALANCE, WITHDRAW } from './action_types';
import STATUS from './status_codes';

export const receiveData = () => {
	return {
		type: RECEIVE_DATA
	};
};

export const receiveDone = (message = '') => {
	return {
		type: RECEIVE_DONE,
		message: message
	};
};

export const receiveError = (message = '') => {
	return {
		type: RECEIVE_ERROR,
		message: message
	};
};

export const depositAmount = (amount, balance) => {
	return {
		type: DEPOSIT,
		amount: amount,
		status: true,
		balance: balance,
		text: 'Deposit'
	};
};

export const withdrawAmount = (amount, balance) => {
	return {
		type: WITHDRAW,
		amount: amount,
		balance: balance,
		text: 'Withdraw'
	};
};

export const addTransactions = (transactions = []) => {
	return {
		type: ADD_TRANSACTIONS,
		transactions: transactions
	};
};

export const checkBalance = (amount, balance) => {
	return {
		type: CHECK_BALANCE,
		haveEnough: (balance - amount > 0)
	};
};

export const updateBalance = (balance) => {
	return {
		type: UPDATE_BALANCE,
		balance: balance
	};
};

export const fetchData = () => {
	return (dispatch) => {
		dispatch(receiveData());
		axios.get('http://localhost:3002/bankAccount')
			.then((res) => {
				dispatch(updateBalance(_.get(res, 'data.balance', 0)));
				dispatch(addTransactions(_.get(res, 'data.transactions', [])));
				dispatch(receiveDone('Data Fetched Successfully'));
			})
			.catch(() => {
				dispatch(receiveError('Data Fetch Failed'));
			});
	};
};