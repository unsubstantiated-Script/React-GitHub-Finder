//this is the printing press that takes that template and injects the info and prints it out repeatedly
import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
	state = {
		users: [
			{
				id: "1",
				login: "defunkt",
				avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
				html_url: "https://github.com/mojombo",
			},
			{
				id: "2",
				login: "ezmobius",
				avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
				html_url: "https://github.com/ezmobius",
			},
			{
				id: "3",
				login: "vanpelt",
				avatar_url: "https://avatars1.githubusercontent.com/u/17?v=4",
				html_url: "https://github.com/vanpelt",
			},
		],
	};
	render() {
		return (
			<div style={userStyle}>
				{this.state.users.map((user) => (
					//These 'attributes' are actually props in React
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridGap: "1rem",
};

export default Users;
