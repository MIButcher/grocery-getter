import React, { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { globalLoadingAtom } from '@utilities/atoms';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';
import Button from '@mui/material/Button';
import { clearPersistedSelections } from '@utilities/persistedSelections';
import styles from './AdminView.module.scss';

const AdminView: React.FC = () => {
	const setLoading = useSetAtom(globalLoadingAtom);
	const navigateWithLoading = useNavigateWithLoading();

	useEffect(() => {
        clearPersistedSelections();
		setLoading(false);
    }, []);

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Admin Dashboard</div>
			<div className={styles.buttonsContainer}>
				{['Aisle', 'Layout', 'Product', 'Store', 'User'].map((className) => (
					<Button
						key={`Admin ${className}s`}
						variant="outlined"
						onClick={() => navigateWithLoading(`/admin/${className.toLowerCase()}s`)}
					>
						Manage {className}s
					</Button>
				))}
				<Button
					variant="outlined"
					onClick={() => navigateWithLoading(`/user`)}
					style={{marginTop: '5rem'}}
				>
					User Dashboard
				</Button>
			</div>
		</div>
	);
};

export default AdminView;
