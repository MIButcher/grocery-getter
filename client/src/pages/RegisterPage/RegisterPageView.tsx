import React, { useEffect, useState } from 'react';
import { useToast } from '@context/toastContext';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { User } from '@models/User';
import { UserApi } from '@apis/UserApi';
import { Configuration } from '@generated/runtime';
import { useSetAtom } from 'jotai';
import { userAtom, globalLoadingAtom } from '@utilities/atoms';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';
import API_BASE_PATH from '@config/apiConfig';
import styles from '../PagesView.module.scss';

const RegisterPage: React.FC = () => {
	const toast = useToast()
    const [user, setUser] = useState<User>({} as User);
    const [confirmPassword, setConfirmPassword] = useState('');
	const setUserAtom = useSetAtom(userAtom);
	const setLoading = useSetAtom(globalLoadingAtom);
	const navigateWithLoading = useNavigateWithLoading();

	useEffect(() => {
		setLoading(false);
    }, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (user.password !== confirmPassword) {
			toast('Passwords do not match!', 'error');
            return;
        }
        try {
            setLoading(true);
            const userApi = new UserApi(
                new Configuration({ basePath: API_BASE_PATH})
            );
			const savedUser = await userApi.saveUser({ user });
            setUserAtom(savedUser);
            navigateWithLoading('/user', { state: { user: savedUser } });
			toast('User saved successfully!', 'success');
		} catch (error) {
			console.error('Failed to save user:', error);
			toast('Failed to save user. Please try again.', 'error');
		} finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>Register</div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>First Name:</label>
                    <input
                        type="text"
						name="firstName"
                        value={user.firstName || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Last Name:</label>
                    <input
                        type="text"
						name="lastName"
                        value={user.lastName || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
						name="email"
                        value={user.email || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
            </form>
            <div className={styles.actionsContainer}>
                <div className={styles.actions}>
                    <Button variant="outlined" onClick={handleSubmit}>Register</Button>
                </div>
                <Link to="/login">Return to Login</Link>
            </div>
        </div>
    );
};

export default RegisterPage;
