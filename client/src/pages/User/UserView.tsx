import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './UserView.module.scss';

const UserPage: React.FC = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Users</div>
			<div className={styles.gridContainer}>
				{/* Add logic to display a list of User instances */}
			</div>
			<div className={styles.actionsContainer}>
				<Button variant="outlined">
					Add New User
				</Button>
				<Link to="/admin">Return to Admin Dashboard</Link>
			</div>
		</div>
	);
};

export default UserPage;
