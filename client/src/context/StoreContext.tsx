import React, { createContext, useContext, useState } from 'react';
import { Store } from '../generated/models/Store';

interface StoreContextProps {
	store: Store | null;
	setStore: (store: Store) => void;
}

const StoreContext = createContext<StoreContextProps | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [store, setStore] = useState<Store | null>(null);

	return (
		<StoreContext.Provider value={{ store, setStore }}>
			{children}
		</StoreContext.Provider>
	);
};

export const useStoreContext = () => {
	const context = useContext(StoreContext);
	if (!context) {
		throw new Error('useStoreContext must be used within a StoreProvider');
	}
	return context;
};
