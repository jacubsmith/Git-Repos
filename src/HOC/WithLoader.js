import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const WithLoader = results => WrappedComponent => {
	return class WithLoader extends Component {
		state = {
			data: []
		};

		componentDidMount() {
			const data = Promise.resolve(results);
			data.then(res => {
				this.setState({
					data: res
				});
			});
		}

		render() {
			return this.state.data.length === 0 ? (
				<Loader>Loading</Loader>
			) : (
				<WrappedComponent data={this.state.data} />
			);
		}
	};
};

export default WithLoader;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
	font-size: 10px;
	margin: 50px auto;
	color: transparent;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: #ffffff;
	background: linear-gradient(
		to right,
		#ffffff 10%,
		rgba(255, 255, 255, 0) 42%
	);
	position: relative;
	animation: ${rotate360} 1.4s infinite linear;
	transform: translateZ(0);

	&:before {
		width: 50%;
		height: 50%;
		background: #ff5054;
		border-radius: 100% 0 0 0;
		position: absolute;
		top: 0;
		left: 0;
		content: '';
	}

	&:after {
		background: #ffffff;
		width: 75%;
		height: 75%;
		border-radius: 50%;
		content: '';
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
`;
