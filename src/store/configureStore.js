import { createStore, combineReducers } from "redux";
const ConfigureStore = () => {
	const store = createStore(combineReducers({}));
	return store;
};
export default ConfigureStore;
