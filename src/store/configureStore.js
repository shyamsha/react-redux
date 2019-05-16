import { createStore, combineReducers, applyMiddleware } from "redux";

import userReducer from "../reducers/users";
import thunk from "redux-thunk";
const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			users: userReducer
		}),
		applyMiddleware(thunk)
	);
	return store;
};
export default ConfigureStore;
