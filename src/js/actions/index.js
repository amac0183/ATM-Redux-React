export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const UPDATE_BALANCE = 'UPDATE_BALANCE';
export const CHECK_BALANCE = 'CHECK_BALANCE';

export const depositAmount = (amount, balance) => {
	return {
		type: DEPOSIT,
		amount: amount,
		status: true,
		balance: balance + amount
	};
}

export const withdrawAmount = (amount, balance) => {
	return {
		type: WITHDRAW,
		amount: amount*-1,
		balance: balance - amount
	};
}

export const checkBalance = (amount, balance) => {
	return {
		type: CHECK_BALANCE,
		haveEnough: (balance - amount > 0)
	};
}

export const updateBalance = (amount, balance) => {
	return {
		type: UPDATE_BALANCE,
		amount: amount,
		balance: balance
	};
}