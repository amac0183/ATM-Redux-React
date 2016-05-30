import React, { Component } from 'react';
import { connect } from 'react-redux';
import { depositAmount, updateBalance, withdrawAmount } from '../actions/';

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.deposit = this.deposit.bind(this);
        this.withdraw = this.withdraw.bind(this);
    }
    getAmountValue() {
        return Number(this.refs.amount.value);
    }
    deposit() {
        const amount = this.getAmountValue();
        const balance = this.props.balance + amount;

        console.log(balance);

        const errorMsg = this.errorHandling(amount, balance);
        if(errorMsg) {
            alert(errorMsg);
            return;
        }

        this.props.deposit(amount, balance);
        this.props.updateBalance(balance);
    }
    withdraw() {
        let amount = this.getAmountValue()*-1;
        let balance = this.props.balance + amount;

        const errorMsg = this.errorHandling(amount, balance, true);
        if(errorMsg) {
            alert(errorMsg);
            return;
        }

        this.props.withdraw(amount, balance);
        this.props.updateBalance(balance);
    }
    errorHandling(amount, balance, isWithdrawal=false) {
        if(Number.isNaN(amount)) {
            return 'Amount is not an actual number';
        }

        if((isWithdrawal && amount >= 0) ||
            (!isWithdrawal && amount <=0 )) {
            return 'Amount must be greater than 0';
        }

        if(isWithdrawal && balance < 0) {
            return 'Your withdrawal amount exceeds the balance in your account.';
        }

        return;
    }
    render() {
        const { balance, transactions, withdraw, updateBalance } = this.props;
        
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactions.map(transaction =>
                            <tr>
                                <td>{transaction.text}</td>
                                <td>$ {transaction.amount}</td>
                                <td>$ {transaction.balance}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <input ref="amount" />
                <button onClick={this.withdraw} >Withdraw</button>
                <button onClick={this.deposit} >Deposit</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance,
        transactions: state.transactions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (amount, balance) => {
            dispatch(depositAmount(amount, balance));
        },
        updateBalance: (balance) => {
            dispatch(updateBalance(balance));
        },
        withdraw: (amount, balance) => {
            dispatch(withdrawAmount(amount, balance));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);