import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './devtools';

import Balance from '../components/balance'

export default class Root extends Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <div>
                    <Balance />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
