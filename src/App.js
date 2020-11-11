import React, { Component } from "react";
import "./App.css";

class App extends Component {
	foo = () => "Bars";
	render() {
		const name = "Jimmy Joe";
		const loading = false;
		const showName = true;

		// const foo = () => "Bar";
		return (
			<div className='App'>
				<h1>My Appz</h1>
				{loading ? <h4>Loading Folz</h4> : <h4>Hello {showName && name}!</h4>}
			</div>
		);
	}
}

export default App;
