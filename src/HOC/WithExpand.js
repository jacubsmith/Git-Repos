import React, { Component } from 'react';

const WithExpand = num => WrappedComponent => {
	return class WithExpand extends Component {
		state = {
			visible: num
		};

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};

export default WithExpand;
