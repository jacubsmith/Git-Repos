import React, { Component } from 'react';
import axios from 'axios';
import RepoList from './components/RepoList';
import WithLoader from './HOC/WithLoader';
import WithExpand from './HOC/WithExpand';
import TaskDescription from './TaskDescription';

class App extends Component {
	state = {
		repos: []
	};

	async componentWillMount() {
		const SEARCH_ENDPOINT =
			'https://api.github.com/search/repositories?q=react';

		const getReactRepositories = () =>
			axios
				.get(SEARCH_ENDPOINT) // eslint-disable-line
				.then(result => result.data.items)
				.then(repos =>
					repos.map(({ forks, name, stargazers_count, html_url }) => ({
						forks,
						name,
						stars: stargazers_count,
						url: html_url
					}))
				);

		const repos = await getReactRepositories();

		this.setState({
			repos
		});
	}

	render() {
		// Task Desc
		// const Repos = TaskDescription;

		// Just Repo
		// const Repos = RepoList;

		// With Loader
		// const Repos = WithLoader(RepoList);

		// With Expand
		// const Repos = WithExpand(5)(RepoList);

		// With Both
		const Repos = WithLoader(WithExpand(6)(RepoList));

		return <Repos data={this.state.repos} />;
	}
}

export default App;
