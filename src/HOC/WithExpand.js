import React, { Component } from 'react';

const WithExpand = num => WrappedComponent => {
	return class WithExpand extends Component {
		constructor(props) {
			super(props);
			this.handleClick = this.handleClick.bind(this);
		}

		state = {
			visible: num,
			isToggled: false
		};

		handleClick() {
			this.setState({
				isToggled: !this.state.isToggled,
				visible: this.isToggled === true ? num : 15
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
