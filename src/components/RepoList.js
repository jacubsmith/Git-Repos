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
		).isRequired
	};

	static defaultProps = {
		data: [
			{
				name: 'default',
				stars: 100,
				forks: 100
			}
		],
		value: 5
	};

	render() {
		const { data, value } = this.props;
		return (
			<Fragment>
				<RepoGridWrapper>
					<RepoGrid>
						<div>🖊️</div>
						<div>⭐</div>
						<div>🍴️</div>
						{data.map(
							(repo, i) =>
								i <= value ? (
									<Fragment>
										<div>{repo.name}</div>
										<div>{repo.stars}</div>
										<div>{repo.forks}</div>
									</Fragment>
								) : (
									''
								)
						)}
					</RepoGrid>
				</RepoGridWrapper>
				{this.props.children}
			</Fragment>
		);
	}
}

export default RepoList;

// Using Styled Components as it is more suited for this project (little styles)
// would usually use SCSS and BEM - focus for this is primarily functionality

const RepoGridWrapper = styled.section`
	max-width: 600px;
	margin: 0 auto;
`;

const RepoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 5px;
	justify-items: center;
`;
