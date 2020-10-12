import React from 'react';

class MainContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: this.props.author,
			title: this.props.title,
			date: this.props.date,
			body: this.props.body
		};
	}
	static async getInitialProps({ req }) {
		let pageProps = {};
		return { pageProps };
	}
	render () {
		return (
			<div className="container content is-max-desktop">
				<small>{this.state.date}</small>
				<small>{this.state.author}</small>
				<h1>{this.state.title}</h1>
				<p>{this.state.body}</p>
			</div>
		);
	}
};

export default MainContent;
