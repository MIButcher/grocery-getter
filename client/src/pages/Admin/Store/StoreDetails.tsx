import React, { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { globalLoadingAtom } from '@utilities/atoms';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';
import { useToast } from '@context/toastContext';
import { useLocation, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Store } from '@models/Store';
import { StoreApi } from '@apis/StoreApi';
import { Configuration } from '@generated/runtime';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const StoreDetails: React.FC = () => {
	const toast = useToast()
	const location = useLocation();
	const initialStore = location.state?.store as Store;
	const [store, setStore] = useState<Store>(initialStore);
	const setLoading = useSetAtom(globalLoadingAtom);
	const navigateWithLoading = useNavigateWithLoading();

	useEffect(() => {
		setLoading(false);
    }, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setStore((prevStore) => ({
			...prevStore,
			[name]: value,
		}));
	};

	const handleSave = async () => {
		try {
            const storeApi = new StoreApi(
                new Configuration({ basePath: API_BASE_PATH})
            );
			await storeApi.saveStore({store});
            navigateWithLoading('/admin/stores');
			toast('Store saved successfully!', 'success');
		} catch (error) {
			console.error('Failed to save store:', error);
			toast('Failed to save store. Please try again.', 'error');
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Store Details</div>
			<form className={styles.form}>
                <div className={styles.formGroup}>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={store.name ?? ''}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label>Address:</label>
					<input
						type="text"
						name="address"
						value={store.address ?? ''}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label>City:</label>
					<input
						type="text"
						name="city"
						value={store.city ?? ''}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label>State:</label>
					<input
						type="text"
						name="state"
						value={store.state ?? ''}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label>Zip Code:</label>
					<input
						type="text"
						name="zipCode"
						value={store.zipCode ?? ''}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label>Phone Number:</label>
					<input
						type="text"
						name="phoneNumber"
						value={store.phoneNumber ?? ''}
						onChange={handleChange}
					/>
				</div>
			</form>
            <div className={styles.actionsContainer}>
                <div className={styles.actions}>
                    <Button variant="outlined" onClick={handleSave} className="save-button">
                        Save
                    </Button>
                    <Button variant="outlined" onClick={() => navigateWithLoading('/admin/stores')} className="cancel-button">
                        Cancel
                    </Button>
                </div>
                <Link to="/admin">Return to Admin Dashboard</Link>
            </div>
		</div>
	);
};

export default StoreDetails;
