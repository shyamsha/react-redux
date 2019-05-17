export const listUsers = users => {
	return {
		type: "LIST_USERS",
		payload: users
	};
};

export const startUserApi = () => {
	return dispatch => {
		console.log("start user api");
		fetch("http://localhost:3001/users")
			.then(response => {
				return response.json();
			})
			.then(users => {
				dispatch(listUsers(users));
			});
	};
};
