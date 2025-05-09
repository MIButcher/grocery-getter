import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './LayoutView.module.scss';

const LayoutPage: React.FC = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Layouts</div>
			<div className={styles.gridContainer}>
				{/* Add logic to display a list of Layout instances */}
			</div>
			<div className={styles.actionsContainer}>
				<Button variant="outlined">
					Add New Layout
				</Button>
				<Link to="/admin">Return to Admin Dashboard</Link>
			</div>
		</div>
	);
};

export default LayoutPage;
