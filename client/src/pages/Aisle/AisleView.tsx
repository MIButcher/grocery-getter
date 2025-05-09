import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './AisleView.module.scss';

const AislePage: React.FC = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Aisles</div>
			<div className={styles.gridContainer}>
				{/* Add logic to display a list of Aisle instances */}
			</div>
			<div className={styles.actionsContainer}>
				<Button variant="outlined">
					Add New Aisle
				</Button>
				<Link to="/dashboard/mobile">Return to Dashboard</Link>
			</div>
		</div>
	);
};

export default AislePage;
