import React, { createContext, ReactNode } from 'react';

const Context = createContext({});

interface ContextProviderProps {
	children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const contextValue = {};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
