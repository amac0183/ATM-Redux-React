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
        let amount = this.getAmountValue();
        let balance = this.props.balance + amount;

        if(this.errorHandling(amount, balance) === 0) {
            return;
        }

        this.props.deposita(amount, balance);
        this.props.updateBalance(balance);
    }
    withdraw() {
        let amount = this.getAmountValue()*-1;
        let balance = this.props.balance + amount;

        if(this.errorHandling(amount, balance, true) === 0) {
            return;
        }

        this.props.withdraw(amount, balance);
        this.props.updateBalance(balance);
    }
    errorHandling(amount, balance, isWithdrawal=false) {
        if(Number.isNaN(amount)) {
            alert('Amount is not an actual number');
            return 0;
        }

        if((isWithdrawal && amount >= 0) || 
            (!isWithdrawal && amount <=0 )) {
            alert('Amount must be greater than 0');
            return 0;
        }

        if(isWithdrawal && balance < 0) {
            alert('Your withdrawal amount exceeds the balance in your account.');
            return 0;
        }

        return 1;
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