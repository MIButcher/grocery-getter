import React, { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { globalLoadingAtom } from '@utilities/atoms';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';
import { useToast } from '@context/toastContext';
import { useLocation, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Layout } from '@models/Layout';
import { LayoutApi } from '@apis/LayoutApi';
import { Configuration } from '@generated/runtime';
import { StoreApi } from '@apis/StoreApi';
import { Store } from '@models/Store';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const LayoutDetails: React.FC = () => {
	const toast = useToast()
	const location = useLocation();
	const initialLayout = location.state?.layout as Layout;
	const layouts = location.state?.layouts as Layout[];
	const [layout, setLayout] = useState<Layout>(initialLayout);
	const [stores, setStores] = useState<Store[]>([]);
	const [suggestedName, setSuggestedName] = useState<string>('');
	const setLoading = useSetAtom(globalLoadingAtom);
	const navigateWithLoading = useNavigateWithLoading();

	useEffect(() => {
		const fetchStores = async () => {
			try {
				setLoading(true);
				const storeApi = new StoreApi(
					new Configuration({ basePath: API_BASE_PATH})
				);
				const response = await storeApi.getStores();
				setStores(response);
			} catch (error) {
				console.error('Failed to fetch stores:', error);
				toast('Failed to load stores. Please try again.', 'error');
			} finally {
                setLoading(false);
            }
		};
		fetchStores();
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLayout((prevLayout) => ({
			...prevLayout,
			[name]: value,
		}));
	};

	const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		const store = stores.find(store => store.id === parseInt(value));
		setLayout((prevLayout) => ({
			...prevLayout,
			[name]: value ? parseInt(value) : undefined,
			store: store || undefined,
		}));
		const suggestedName = store ? store.name + '-' + store.city : '';
		const isNameTaken = layouts.some(existingLayout => existingLayout.name === suggestedName);
		if (isNameTaken) {
			setSuggestedName(suggestedName + ' (1)');
		} else {
			setSuggestedName(suggestedName);
		}
	};

	const handleAccept = () => {
		setLayout((prevLayout) => ({
			...prevLayout,
			name: suggestedName,
		}));
		setSuggestedName('');
	};

	const handleSave = async () => {
		try {
			setLoading(true);
            const layoutApi = new LayoutApi(
                new Configuration({ basePath: API_BASE_PATH})
            );
			await layoutApi.saveLayout({layout});
            navigateWithLoading('/admin/layouts');
			toast('Layout saved successfully!', 'success');
		} catch (error) {
			console.error('Failed to save layout:', error);
			toast('Failed to save layout. Please try again.', 'error');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Layout Details</div>
			<form className={styles.form}>
				<div className={styles.formGroup}>
					<label>Store:</label>
					<select
						name="storeId"
						value={layout.storeId ?? ''}
						onChange={handleChangeSelect}
					>
						<option value="" disabled>Select a store</option>
							{stores.map((store) => (
							<option key={store.id} value={store.id}>
								{store.name}
							</option>
						))}
					</select>
				</div>
                <div className={styles.formGroup}>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={layout.name ?? ''}
						onChange={handleChange}
					/>
				</div>
			</form>
			{suggestedName && 
				<div className={styles.suggestionContainer}>
					<label>Suggested Name:</label>
					<label>{suggestedName}</label>
					<Button variant="outlined" onClick={handleAccept} className="accept-button">
						Accept
					</Button>
				</div>
			}
            <div className={styles.actionsContainer}>
                <div className={styles.actions}>
                    <Button variant="outlined" onClick={handleSave} className="save-button">
                        Save
                    </Button>
                    <Button variant="outlined" onClick={() => navigateWithLoading('/admin/layouts')} className="cancel-button">
                        Cancel
                    </Button>
                </div>
                <Link to="/admin">Return to Admin Dashboard</Link>
            </div>
		</div>
	);
};

export default LayoutDetails;
