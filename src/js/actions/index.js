import _ from 'lodash';
import axios from 'axios';

export const REQUEST_DATA = 'REQUEST_DATA';

export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const ADD_TRANSACTIONS = 'ADD_TRANSACTIONS';
export const UPDATE_BALANCE = 'UPDATE_BALANCE';
export const CHECK_BALANCE = 'CHECK_BALANCE';
export const FETCH_BALANCE = 'FETCH_BALANCE';
export const RECEIVE_DONE = 'RECEIVE_DONE';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const STATUS = {
	INIT: 1,
	DONE_LOADING: 2,
	LOADING: 3,
	ERROR: 4
};

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