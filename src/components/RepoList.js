import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class RepoList extends Component {
	static propTypes = {
		data: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				stars: PropTypes.number.isRequired,
				forks: PropTypes.number.isRequired
			})
		).isRequired,
		toShow: PropTypes.number
	};

	static defaultProps = {
		data: [
			{
				name: 'default',
				stars: 100,
				forks: 100
			}
		],
		toShow: 15
	};

	render() {
		const { data, toShow, children } = this.props;
		return (
			<Wrapper>
				<RepoTable>
					<div>
						<span role="img">🖊️</span>
						<span role="img">⭐</span>
						<span role="img">🍴️</span>
					</div>
					{data.map(
						(repo, i) =>
							i <= toShow ? (
								<div key={repo.url}>
									<span>{repo.name}</span>
									<span>{repo.stars}</span>
									<span>{repo.forks}</span>
								</div>
							) : (
								''
							)
					)}
				</RepoTable>
				{children}
			</Wrapper>
		);
	}
}

export default RepoList;

// Using Styled Components as it is more suited for this project (little styles)
// would usually use SCSS and BEM - focus for this is primarily functionality

const Wrapper = styled.section`
	max-width: 600px;
	margin: 0 auto;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
		Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-size: 16px;
`;

const RepoTable = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-top: 20px;
	border: 1px solid #dee2e6;
	border-radius: 4px;
	box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.05);

	& div {
		display: flex;
		justify-content: space-between;
		padding: 10px 0;

		&:first-of-type {
			border-top: 1px solid #dee2e6;
			border-bottom: 2px solid #dee2e6;
		}

		&:nth-of-type(even) {
			background-color: rgba(0, 0, 0, 0.05);
		}

		& span {
			flex: 0 1 33%;
			text-align: center;
		}
	}
`;
