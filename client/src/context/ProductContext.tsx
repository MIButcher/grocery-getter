import React, { createContext, useContext, useState } from 'react';
import { Product } from '../generated/models/Product';

interface ProductContextProps {
	product: Product | null;
	setProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [product, setProduct] = useState<Product | null>(null);

	return (
		<ProductContext.Provider value={{ product, setProduct }}>
			{children}
		</ProductContext.Provider>
	);
};

export const useProductContext = () => {
	const context = useContext(ProductContext);
	if (!context) {
		throw new Error('useProductContext must be used within a ProductProvider');
	}
	return context;
};
