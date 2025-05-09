import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './ProductView.module.scss';

const ProductPage: React.FC = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Products</div>
			<div className={styles.gridContainer}>
				{/* Add logic to display a list of Product instances */}
			</div>
			<div className={styles.actionsContainer}>
				<Button variant="outlined">
					Add New Product
				</Button>
				<Link to="/dashboard/mobile">Return to Dashboard</Link>
			</div>
		</div>
	);
};

export default ProductPage;
