export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const UPDATE_BALANCE = 'UPDATE_BALANCE';
export const CHECK_BALANCE = 'CHECK_BALANCE';

export const depositAmount = (amount, balance) => {
	return {
		type: DEPOSIT,
		amount: amount,
		status: true,
		balance: balance + amount,
		text: 'Deposit'
	};
}

export const withdrawAmount = (amount, balance) => {
	return {
		type: WITHDRAW,
		amount: amount,
		balance: balance,
		text: 'Withdraw'
	};
}

export const checkBalance = (amount, balance) => {
	return {
		type: CHECK_BALANCE,
		haveEnough: (balance - amount > 0)
	};
}

export const updateBalance = (balance) => {
	return {
		type: UPDATE_BALANCE,
		balance: balance
	};
}