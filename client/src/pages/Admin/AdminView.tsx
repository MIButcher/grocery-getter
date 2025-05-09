import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './AdminView.module.scss';
// import HomePage from '../HomePage/HomePageView';

const AdminView: React.FC = () => {
	const navigate = useNavigate();

	// TODO: This will move to the login page for after the user has logged in
	//const [showHomePage, setShowHomePage] = useState(true);

	// useEffect(() => {
	// 	const timer = setTimeout(() => setShowHomePage(false), 3000); // Show HomePage for 2 seconds
	// 	return () => clearTimeout(timer); // Cleanup timer on unmount
	// }, []);

	// if (showHomePage) {
	// 	return <HomePage />;
	// }

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Admin Dashboard</div>
			<div className={styles.buttonsContainer}>
				{['Aisle', 'Layout', 'Product', 'Store', 'User'].map((className) => (
					<Button
						key={className}
						variant="outlined"
						onClick={() => navigate(`/${className.toLowerCase()}`)}
					>
						Manage {className}
					</Button>
				))}
			</div>
		</div>
	);
};

export default AdminView;
