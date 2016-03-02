import React, { Component } from 'react';
import { connect } from 'react-redux';

class Balance extends Component {
    render() {
        const { balance } = this.props;
        return (
            <h3>Balance: ${this.props.balance}</h3>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        balance: state.balance
    }
}

export default connect(mapStateToProps)(Balance);