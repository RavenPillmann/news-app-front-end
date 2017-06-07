// @flow
import React from 'react';
import TextBar from './TextBar';

export default class App extends React.Component {
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<h1>What in the world?</h1>
				<TextBar />
			</div>
		);
	}
}