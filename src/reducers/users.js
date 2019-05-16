const userInitialState = [];

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case "LIST_USERS":
			return [...action.payload];
		default:
			return [...state];
	}
};

export default userReducer;
