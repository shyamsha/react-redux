import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.users.map(user => {
						return <li key={user._id}>{user.email}</li>;
					})}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		users: state.users
	};
};
export default connect(mapStateToProps)(App);
