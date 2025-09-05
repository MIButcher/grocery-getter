import React, { useState } from 'react';
import { useToast } from '@context/toastContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Aisle } from '@models/Aisle';
import { AisleApi } from '@apis/AisleApi';
import { Configuration } from '@generated/runtime';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const AisleDetails: React.FC = () => {
	const toast = useToast()
	const location = useLocation();
	const navigate = useNavigate();
	const initialAisle = location.state?.aisle as Aisle;
	const [aisle, setAisle] = useState<Aisle>(initialAisle);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setAisle((prevAisle) => ({
			...prevAisle,
			[name]: value,
		}));
	};

	const handleSave = async () => {
		try {
            const aisleApi = new AisleApi(
                new Configuration({ basePath: API_BASE_PATH })
            );
			await aisleApi.saveAisle({aisle});
            navigate('/admin/aisles');
			toast('Aisle saved successfully!', 'success');
		} catch (error) {
			console.error('Failed to save aisle:', error);
			toast('Failed to save aisle. Please try again.', 'error');
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Aisle Details</div>
			<form className={styles.form}>
                <div className={styles.formGroup}>
					<label>Layout Id:</label>
					<label>{aisle.layoutId ?? ''}</label>
				</div>
                <div className={styles.formGroup}>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={aisle.name ?? ''}
						onChange={handleChange}
					/>
				</div>
                <div className={styles.formGroup}>
					<label>Lineup:</label>
					<input
						type="text"
						name="lineup"
						value={aisle.lineup ?? ''}
						onChange={handleChange}
					/>
				</div>
			</form>
            <div className={styles.actionsContainer}>
                <div className={styles.actions}>
                    <Button variant="outlined" onClick={handleSave} className="save-button">
                        Save
                    </Button>
                    <Button variant="outlined" onClick={() => navigate('/admin/aisles')} className="cancel-button">
                        Cancel
                    </Button>
                </div>
                <Link to="/admin">Return to Admin Dashboard</Link>
            </div>
		</div>
	);
};

export default AisleDetails;
