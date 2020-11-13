//This is the construction of the card

import React, { Component } from "react";

class UserItem extends Component {
	render() {
		//Can do this because we created the structure from Users and passed it into props
		const { login, avatar_url, html_url } = this.props.user;
		return (
			<div className='card text-center'>
				<img
					src={avatar_url}
					alt='User'
					className='round-img'
					style={{ width: "60px" }}
				/>
				<h3>{login}</h3>
				<div>
					<a href={html_url} className='btn btn-dark btn-sm my-1'>
						More
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
