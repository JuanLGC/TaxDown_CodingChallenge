import React, { useState, useEffect } from "react";
import getState from "./flux.jsx";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
        );
        // useEffect(() => {
		// 	state.actions.addSubmission();
		// 	const submissions = () => {
		// 		state.actions.addSubmission();
		// 	};
		// 	return () => submissions();
		// }, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;