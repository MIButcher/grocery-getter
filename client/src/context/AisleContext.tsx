import React, { createContext, useContext, useState } from 'react';
import { Aisle } from '../generated/models/Aisle';

interface AisleContextProps {
	aisle: Aisle | null;
	setAisle: (aisle: Aisle) => void;
}

const AisleContext = createContext<AisleContextProps | undefined>(undefined);

export const AisleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [aisle, setAisle] = useState<Aisle | null>(null);

	return (
		<AisleContext.Provider value={{ aisle, setAisle }}>
			{children}
		</AisleContext.Provider>
	);
};

export const useAisleContext = () => {
	const context = useContext(AisleContext);
	if (!context) {
		throw new Error('useAisleContext must be used within a AisleProvider');
	}
	return context;
};
