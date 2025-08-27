import React, { useState, useEffect } from 'react';
import { useSetUserAndNavigate } from '@hooks/UseSetUserAndNavigate';
import { useToast } from '@context/toastContext';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { UserApi } from '@apis/UserApi';
import { Configuration } from '@generated/runtime';
import { useSetAtom } from 'jotai';
import { userAtom } from '@utilities/atoms';
import HomePage from '../HomePage/HomePageView';
import API_BASE_PATH from '@config/apiConfig';
import './LoginPageView.scss';

const LoginPage: React.FC = () => {
	const toast = useToast()
	const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const setUserAtom = useSetAtom(userAtom);
    const [showHomePage, setShowHomePage] = useState(true);
    const setUserAndNavigate = useSetUserAndNavigate();

	useEffect(() => {
		const timer = setTimeout(() => setShowHomePage(false), 3000); // Show HomePage for 3 seconds
		return () => clearTimeout(timer); // Cleanup timer on unmount
	}, []);

	if (showHomePage) {
		return <HomePage />;
	}

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
		try {
            const userApi = new UserApi(
                new Configuration({ basePath: API_BASE_PATH})
            );
            const loggedInUser = await userApi.loginUser({ user: { lastName: '', firstName: '', email, password } });
            await setUserAndNavigate(loggedInUser);
		} catch (error: any) {
            if (error.response) {
                console.error('API error response:', error.response);
				toast(error.response.message || 'Failed to log in. Please check your credentials and try again.', 'error');
            } else {
                console.error('Unexpected error:', error);
				toast('An unexpected error occurred. Please try again later.', 'error');
            }
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <Button type="submit" className="login-button">Login</Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
