//This is the construction of the card

import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	//Can do this because we created the structure from Users and passed it into props
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
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
