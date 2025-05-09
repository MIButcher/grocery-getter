import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './AdminView.module.scss';

const AdminView: React.FC = () => {
	const navigate = useNavigate();

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
