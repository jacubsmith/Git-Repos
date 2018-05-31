import React, { Component } from 'react';
import axios from 'axios';
import RepoList from './components/RepoList';
import WithLoader from './HOC/WithLoader';
import WithExpand from './HOC/WithExpand';
import TaskDescription from './TaskDescription';

const SEARCH_ENDPOINT = 'https://api.github.com/search/repositories?q=react';

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

class App extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		// Testing the component will acccept data

		const data = Promise.resolve(getReactRepositories());

		data.then(res => {
			this.setState({
				data: res
			});
		});
	}

	render() {
		// Task Desc
		// const Repos = TaskDescription;

		// Just Repo
		// const Repos = RepoList;

		// With Loader
		// const Repos = WithLoader(getReactRepositories())(RepoList);

		// With Expand
		const Repos = WithExpand(5)(RepoList);

		// With Both
		// const Repos = WithLoader(getReactRepositories())(WithExpand(5)(RepoList));

		// return <Repos />;
		// Repo accepting data
		return <Repos data={this.state.data} />;
	}
}

export default App;
