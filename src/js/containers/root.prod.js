import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Balance from '../components/balance';
import StatusDisplay from '../components/status_display';
import Transactions from '../components/transactions';


export default class Root extends Component {
	render() {
		return (
            <Provider store={store}>
                <div className='container'>
                    <div className='page-header'><h1>ATM in Redux-React</h1></div>
                    <StatusDisplay />
                    <Balance />
                    <Transactions />
                    <DevTools />
                </div>
            </Provider>
		);
	}
}