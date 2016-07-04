import React, { Component } from 'react';
import { connect } from 'react-redux';

import STATUS from '../actions/status_codes';

class StatusDisplay extends Component {
	constructor(props) {
		super(props);
	}
	chooseClassName(status) {
		const statusNum = _.get(status, 'status', null);
		switch(statusNum) {
			case STATUS.ERROR:
				return 'alert-danger';
			case STATUS.LOADING:
				return 'alert-info';
			case STATUS.DONE_LOADING:
				return 'alert-success';
			default:
				return '';
		};
	}
	render() {
		const { status } = this.props;
		return (
			<div className={'alert ' + this.chooseClassName(status)} role="alert">{_.get(status, 'message', '')}</div>
		);
	}
};

StatusDisplay.propTypes = {
	status: React.PropTypes.shape({
		status: React.PropTypes.number,
		message: React.PropTypes.string
	}).isRequired
};

const mapStateToProps = (state) => {
	return {
		status: state.status
	};
};

export default connect(mapStateToProps)(StatusDisplay);