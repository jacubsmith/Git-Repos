import React, { Component } from 'react';

const WithExpand = num => WrappedComponent => {
	return class WithExpand extends Component {
		constructor(props) {
			super(props);
			this.handleClick = this.handleClick.bind(this);
		}

		state = {
			isToggled: false,
			visible: num
		};

		handleClick() {
			this.setState({
				isToggled: !this.state.isToggled,
				visible: this.state.isToggled === true ? num : 15
			});
		}

		render() {
			return (
				<WrappedComponent {...this.props} value={this.state.visible}>
					<button onClick={this.handleClick}>Show/Hide</button>
				</WrappedComponent>
			);
		}
	};
};

export default WithExpand;
