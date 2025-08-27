import React, { useState } from 'react';
import { useToast } from '@context/toastContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { User } from '@models/User';
import { UserApi } from '@apis/UserApi';
import { Configuration } from '@generated/runtime';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../AdminView.module.scss';

const UserDetails: React.FC = () => {
	const toast = useToast()
	const location = useLocation();
	const navigate = useNavigate();
	const initialUser = location.state?.user as User;
	const [user, setUser] = useState<User>(initialUser);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};

	const handleSave = async () => {
		try {
            const userApi = new UserApi(
                new Configuration({ basePath: API_BASE_PATH})
            );
			await userApi.saveUser({user});
            navigate('/admin/users');
			toast('User saved successfully!', 'success');
		} catch (error) {
			console.error('Failed to save user:', error);
			toast('Failed to save user. Please try again.', 'error');
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>User Details</div>
			<form className={styles.form}>
                <div className={styles.formGroup}>
					<label>First Name:</label>
					<input
						type="text"
						name="firstName"
						value={user.firstName ?? ''}
						onChange={handleChange}
					/>
				</div>
                <div className={styles.formGroup}>
					<label>Last Name:</label>
					<input
						type="text"
						name="lastName"
						value={user.lastName ?? ''}
						onChange={handleChange}
					/>
				</div>
                <div className={styles.formGroup}>
					<label>email:</label>
					<input
						type="email"
						name="email"
						value={user.email ?? ''}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label>Password:</label>
					<input
						type="password"
						name="password"
						value={user.password ?? ''}
						onChange={handleChange}
					/>
				</div>
			</form>
            <div className={styles.actionsContainer}>
                <div className={styles.actions}>
                    <Button variant="outlined" onClick={handleSave} className="save-button">
                        Save
                    </Button>
                    <Button variant="outlined" onClick={() => navigate('/admin/users')} className="cancel-button">
                        Cancel
                    </Button>
                </div>
                <Link to="/admin">Return to Admin Dashboard</Link>
            </div>
		</div>
	);
};

export default UserDetails;
