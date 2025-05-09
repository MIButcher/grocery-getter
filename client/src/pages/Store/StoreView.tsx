import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './StoreView.module.scss';

const StorePage: React.FC = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Stores</div>
			<div className={styles.gridContainer}>
			{/* Add logic to display a list of Store instances */}
			</div>
			<div className={styles.actionsContainer}>
				<Button variant="outlined">
					Add New Store
				</Button>
				<Link to="/admin">Return to Admin Dashboard</Link>
			</div>
		</div>
	);
};

export default StorePage;
