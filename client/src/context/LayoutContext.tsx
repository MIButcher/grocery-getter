import React, { createContext, useContext, useState } from 'react';
import { Layout } from '../generated/models/Layout';

interface LayoutContextProps {
	layout: Layout | null;
	setLayout: (layout: Layout) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [layout, setLayout] = useState<Layout | null>(null);

	return (
		<LayoutContext.Provider value={{ layout, setLayout }}>
			{children}
		</LayoutContext.Provider>
	);
};

export const useLayoutContext = () => {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error('useLayoutContext must be used within a LayoutProvider');
	}
	return context;
};
