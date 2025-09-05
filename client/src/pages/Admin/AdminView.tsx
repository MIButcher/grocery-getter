import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { clearPersistedSelections } from '@utilities/persistedSelections';
import styles from './AdminView.module.scss';

const AdminView: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
        clearPersistedSelections();
    }, []);

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Admin Dashboard</div>
			<div className={styles.buttonsContainer}>
				{['Aisle', 'Layout', 'Product', 'Store', 'User'].map((className) => (
					<Button
						key={`Admin ${className}s`}
						variant="outlined"
						onClick={() => navigate(`/admin/${className.toLowerCase()}s`)}
					>
						Manage {className}s
					</Button>
				))}
				<Button
					variant="outlined"
					onClick={() => navigate(`/user`)}
					style={{marginTop: '5rem'}}
				>
					User Dashboard
				</Button>
			</div>
		</div>
	);
};

export default AdminView;
