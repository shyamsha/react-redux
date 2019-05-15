import React, { Component } from "react";

class SecondClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: ""
		};
	}
	nameHandle = e => {
		e.persist();
		this.setState(() => ({ name: e.target.value }));
	};
	emailHandle = e => {
		e.persist();
		this.setState(() => ({ email: e.target.value }));
	};
	handleSubmit = e => {
		e.preventDefault();
		const form = {
			name: this.state.name,
			email: this.state.email
		};
		this.props.func(form);
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						name:
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.nameHandle}
						/>
					</label>
					<br />
					<label>
						email:
						<input
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.emailHandle}
						/>
					</label>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default SecondClass;
