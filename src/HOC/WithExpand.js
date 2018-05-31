import React, { Component } from 'react';
import styled from 'styled-components';

const WithExpand = num => WrappedComponent => {
	return class WithExpand extends Component {
		constructor(props) {
			super(props);
			this.handleClick = this.handleClick.bind(this);
		}

		state = {
			isToggled: false,
			buttonText: 'Show',
			visible: num
		};

		handleClick() {
			this.setState({
				isToggled: !this.state.isToggled,
				buttonText: this.state.isToggled === true ? 'Show' : 'Hide',
				visible: this.state.isToggled === true ? num : 15
			});
		}

		render() {
			return (
				<WrappedComponent {...this.props} toShow={this.state.visible}>
					<ExpandButton onClick={this.handleClick}>
						{this.state.buttonText}
					</ExpandButton>
				</WrappedComponent>
			);
		}
	};
};

export default WithExpand;

// Using Styled Components as it is more suited for this project (little styles)
// would usually use SCSS and BEM - focus for this is primarily functionality

const ExpandButton = styled.div`
	display: inline-block;
	border: 2px solid #007bff;
	color: #007bff;
	border-radius: 5px;
	padding: 10px 15px;
	cursor: pointer;
	margin-top: 10px;
	outline: none;
	transition: 0.2s all ease-in-out;
	box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.05);

	&:hover {
		color: white;
		background-color: #007bff;
	}
`;
