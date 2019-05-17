import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import { startUserApi } from "./actions/users";

const store = configureStore();

store.subscribe(() => {
	store.getState();
});

store.dispatch(startUserApi());

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
